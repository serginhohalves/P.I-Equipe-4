const fs = require("fs"); //importa o modulo fs
const path = require("path"); //para pegar o caminho do arquivo
const bcrypt = require("bcrypt");

let  modelCadastroUser = path.join(__dirname, "../model/cadastroUser.json");

const usuariosController = {
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('Registro')
    },
    registroUser: (req, res) => {
        let{name, email, password} = req.body;
        let senhaCriptografada = bcrypt.hashSync(password, 10);
        let usuario = JSON.stringify({ name, email, password: senhaCriptografada })
        fs.writeFileSync(modelCadastroUser, usuario); //escreve no arquivo)
        res.send("usuario cadastrado com sucesso"); 
    },
    pagamento: (req, res) => {
        res.render('pagamento')
    }
}

module.exports = usuariosController