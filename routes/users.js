var express = require('express');
var router = express.Router();
let usuariosController = require('../controller/usuariosController')
const validaUsuarioLogado = require('../middleware/validaUsuarioLogado')

/* GET users listing. */

//Tela de Login
router.get('/login', usuariosController.login)
router.post('/login', usuariosController.loginPost)

//Tela de Registro

router.get('/registro', usuariosController.registro)
router.post('/registro', usuariosController.registroUser)

router.get('/pagamento', usuariosController.pagamento)
router.delete('/deletar/:id', validaUsuarioLogado, usuariosController.deletarUsuario)

router.put('/eu/alterarsenha', validaUsuarioLogado, usuariosController.atualizarSenha)




module.exports = router;
