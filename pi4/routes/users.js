var express = require('express');
var router = express.Router();
let usuariosController = require('../controller/usuariosController')

/* GET users listing. */
router.get('/login', usuariosController.login)


router.get('/registro', usuariosController.registro)
router.post('/registro', usuariosController.registroPost)


router.get('/pagamento', usuariosController.pagamento)


module.exports = router;
