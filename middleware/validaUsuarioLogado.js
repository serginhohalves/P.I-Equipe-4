const { Usuario } = require('../models')

const validaUsuarioLogado = async (req, res, next) => {
    const usuarioSession = req.session.user

    if(usuarioSession){

        next()
    } else {
        res.send("Area restrita")
    }
}

module.exports = validaUsuarioLogado
