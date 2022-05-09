const produtos = require('../models/produtos.json')
const {Produto} = require('../models')

const produtosController = {
    novoProduto: async(req, res, next) => {
        let {nome, descricao, valor, categoria, imagem_produto, estoque } = req.body
        
        const produto = await Produto.create({
            nome,
            descricao,
            valor,
            categoria,
            imagem_produto,
            estoque
        })

        res.status(200).json({
            success: true, 
            produto
        })
    },
    detalheProduto: (req, res) => {
        res.render('Detalhe-Produto', {produtos:produtos})
    }
}

module.exports = produtosController