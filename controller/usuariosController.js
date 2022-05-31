const { sequelize, Usuario } = require('../models')
const bcrypt = require("bcrypt");
const capturarErrosAsync = require('../middleware/capturarErrosAsync')
const ManipuladorDeErros = require('../utils/ManipuladorDeErros')


const usuariosController = {
    login: (req, res) => {
        res.render('login')
    },
    loginPost: capturarErrosAsync(async (req, res, next) => {
        let { email, senha } = req.body
        if (!email || !senha) {
            return next(new ManipuladorDeErros('Por favor, digite o email e a senha', 400))
        }

        const usuario = await Usuario.findOne({
            where: {
                email
            }
        })
        if (!usuario) {
            return next(new ManipuladorDeErros('Email ou senha inválidos', 400))
        }

        let aSenhaCombina = await bcrypt.compare(senha, usuario.senha)
        if (aSenhaCombina) {
            req.session.user = usuario
            res.redirect('/')
        }
        if (!aSenhaCombina) {
            return next(new ManipuladorDeErros('Email ou senha inválidos', 400))
        }

    }),
    registro: (req, res) => {
        res.render('Registro')
    },
    registroUser: capturarErrosAsync(async (req, res, next) => {
        let { email, senha, nome, atributo } = req.body
        let senhaHash = await bcrypt.hash(senha, 10)
        let oUsuarioJaExiste = await Usuario.findOne({
            where: {
                email
            }
        })
        if (!oUsuarioJaExiste) {
            const usuario = await Usuario.create({
                email,
                senha: senhaHash,
                nome,
                atributo
            })

            res.status(200).json({
                success: true,
                usuario: usuario.email,
                id: usuario.id
            })
        } else {
            return next(new ManipuladorDeErros('Já existe uma conta cadastrada para este email.', 401))
        }
    }),
    pagamento: (req, res) => {
        res.render('pagamento')
    },
    deletarUsuario: capturarErrosAsync(async (req, res) => {
        let { id } = req.params
        const usuario = await Usuario.destroy({
            where: {
                id
            }
        })
        res.send('usuario deletado')
    }),
    atualizarSenha: capturarErrosAsync(async (req, res, next) => {
        let { senhaAtual, novaSenha } = req.body
        const { usuario } = req
    
        const aSenhaCombina = await bcrypt.compare(senhaAtual, usuario.senha)
        if (!aSenhaCombina) {
          res.send('Senha atual incorreta!')
        }
    
        const novaSenhaHash = await bcrypt.hash(novaSenha, 10)
        await Usuario.update(
          {
            senha: novaSenhaHash,
          },
          {
            where: {
              id: usuario.id,
            },
          },
        )
    
        res.status(200).json({
          success: true,
          message: "Senha atualizado com sucesso"
        })
      }),
      logout: capturarErrosAsync( async (req, res, next) => {
        req.session.destroy()
        res.send('Logout com sucesso')
      })
}

module.exports = usuariosController