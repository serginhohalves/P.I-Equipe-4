const {Usuario} = require('../models')
const sequelize = require('sequelize')

const usuariosController = {
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('registro')
    },
    pagamento: (req, res) => {
        res.render('pagamento')
    },

    //registro de usuario com rota segura
    registroPost: async(req, res) => {
        let {email,senha} = req.body

        const usuario = await Usuario.create({
            email,
            senha
        })

        res.status(200).send(usuario)
    }
}

module.exports = usuariosController