const express = require('express')
const router = express()
const produtosController = require('../controller/produtosController')
const validaUsuarioLogado = require('../middleware/validaUsuarioLogado')

router.get('/:id/detalhe', validaUsuarioLogado, produtosController.detalheProduto)
router.post('/novo', produtosController.novoProduto)

module.exports = router