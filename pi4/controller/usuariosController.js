const fs = require("fs"); //importa o modulo fs
const path = require("path"); //para pegar o caminho do arquivo
const bcrypt = require("bcrypt");
const {Usuario} = require("../models");
const usuariosBanco = require("../model/usuarios.json");





const usuariosController = {
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('Registro')
    },
    // registro do usuario no banco de dados
    registroPost: async(req, res) => {
        const {nome, email, senha} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senha, salt);
        const usuario = new Usuario({
            nome: nome,
            email: email,
            senha: hash
        });

        usuariosBanco.push(usuario);
        fs.writeFileSync("./model/usuarios.json", JSON.stringify(usuariosBanco, null, 2));


        
        await usuario.save();
        res.status(200).send("Usuario cadastrado com sucesso!");
    },

    pagamento: (req, res) => {
        res.render('pagamento')
    }
}

module.exports = usuariosController