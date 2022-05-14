const {Produto} = require('../models')

const listaDeProdutos = async () => {
    let produtos = await Produto.findAll()
    return produtos
}

const indexController = {
    index: async(req, res)  => {
        res.render('index',{listaProdutos: await listaDeProdutos()})
    }
}

module.exports = indexController