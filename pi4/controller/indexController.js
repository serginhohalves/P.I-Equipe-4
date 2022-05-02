let produtos = require('../models/produtos.json')

const indexController = {
    index:(req, res) => {
        res.render('index',{listaProdutos:produtos})
    }
}

module.exports = indexController