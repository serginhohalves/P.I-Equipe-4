const { Usuario } = require('../models')

const validaUsuarioLogado = async (req, res, next) => {
    const usuarioSession = req.session.user

    if (usuarioSession) {
        const usuario = await Usuario.findOne({
            where: {
                email: usuarioSession,
            },
        })

        req.usuario = usuario

        next()
    } else {
        res.send("Area restrita")
    }
}

module.exports = validaUsuarioLogado
