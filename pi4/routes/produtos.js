const express = require('express')
const router = express()
const produtosController = require('../controller/produtosController')

router.get('/detalhe', produtosController.detalheProduto)

module.exports = router