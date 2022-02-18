const usuariosController = {
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('registro')
    },
    pagamento: (req, res) => {
        res.render('pagamento')
    }
}

module.exports = usuariosController