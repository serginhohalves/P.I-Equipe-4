const validaUsuarioLogado = (req, res, next) => {
    const usuario = req.session.user
    console.log(req.session)
    if(usuario){
        next()
    }else{
        res.send("Area restrita")
    }
}

module.exports = validaUsuarioLogado
