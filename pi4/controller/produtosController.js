// const produtos = require('../model/produtos.json')

const produtosController = {
    detalheProduto: (req, res) => {
        res.render('Detalhe-Produto', {produtos:produtos})
    }
}

module.exports = produtosController