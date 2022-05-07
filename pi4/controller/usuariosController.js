const { sequelize, Usuario } = require('../models')
const bcrypt = require("bcrypt");
const capturarErrosAsync = require('../middleware/capturarErrosAsync')


const usuariosController = {
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('Registro')
    },
    registroUser: capturarErrosAsync(async (req, res) => {
        let { email, senha } = req.body
        let senhaHash = await bcrypt.hash(senha, 10)
        let oUsuarioJaExiste = await Usuario.findOne({
            where:{
                email
            }
        })
        if(!oUsuarioJaExiste){
            const usuario = await Usuario.create({
                email,
                senha: senhaHash
            })
    
            res.status(200).json({
                success: true,
                usuario: usuario.email,
                id: usuario.id
            }) 
        }else{
            return res.status(401).json({
                success: false,
                message: 'Já existe um usuário cadastrado para este email'
            })
        }
    }),
    pagamento: (req, res) => {
        res.render('pagamento')
    }
}

module.exports = usuariosController