var express = require('express');
var router = express.Router();
let usuariosController = require('../controller/usuariosController')

/* GET users listing. */

//Tela de Login
router.get('/login', usuariosController.login)



router.get('/pagamento', usuariosController.pagamento)



module.exports = router;
