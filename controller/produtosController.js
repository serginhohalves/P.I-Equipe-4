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
    detalheProduto: async(req, res) => {
        let { id } = req.params
        let produto = await Produto.findByPk(id)

        res.render('Detalhe-Produto', {produto})
    }
}

module.exports = produtosController