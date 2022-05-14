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
            req.session.user = email
            res.send("usuario logado")
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
    deletarUsuario: async (req, res) => {
        let { id } = req.params
        const usuario = await Usuario.destroy({
            where: {
                id
            }
        })
        res.send('usuario deletado')
    }
}

module.exports = usuariosController