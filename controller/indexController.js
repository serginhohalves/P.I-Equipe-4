const { Produto } = require('../models')

const listaDeProdutos = async () => {
    let produtos = await Produto.findAll()
    return produtos
}

const indexController = {
    index: async (req, res) => {
         if(req.session.user) {
            res.render('index', { listaProdutos: await listaDeProdutos(), user:req.session.user} )  
         } else{
            res.render('index', { listaProdutos: await listaDeProdutos() })
         }
        
    }
}

module.exports = indexController