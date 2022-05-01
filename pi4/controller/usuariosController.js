const { sequelize, Usuario } = require('../models')
const bcrypt = require("bcrypt");


const usuariosController = {
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('Registro')
    },
    registroUser: async (req, res) => {
        let { email, senha } = req.body
        const usuario = await Usuario.create({
            email,
            senha
        })

        res.status(200).json(usuario) 
    },
    pagamento: (req, res) => {
        res.render('pagamento')
    }
}

module.exports = usuariosController