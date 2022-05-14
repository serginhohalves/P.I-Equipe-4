const express = require('express')
const router = express()
const produtosController = require('../controller/produtosController')
const validaUsuarioLogado = require('../middleware/validaUsuarioLogado')
const verificaPrivilegios = require('../middleware/verificaPrivilegios')

router.get('/:id/detalhe', validaUsuarioLogado, produtosController.detalheProduto)
router.post('/novo', validaUsuarioLogado, verificaPrivilegios, produtosController.novoProduto)
router.delete('/deletar/:id', validaUsuarioLogado, verificaPrivilegios, produtosController.deletaProduto)

module.exports = router