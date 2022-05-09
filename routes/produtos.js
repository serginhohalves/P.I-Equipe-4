const express = require('express')
const router = express()
const produtosController = require('../controller/produtosController')

router.get('/detalhe', produtosController.detalheProduto)
router.post('/novo', produtosController.novoProduto)

module.exports = router