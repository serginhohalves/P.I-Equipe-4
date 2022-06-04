const verificaPrivilegios = async (req, res, next) => {
    const { usuario } = req.session

    if (usuario.atributo == 'admin') {

        next()
    } else {
        res.send('Você não tem privilégios para executar esta ação')
    }
}

module.exports = verificaPrivilegios