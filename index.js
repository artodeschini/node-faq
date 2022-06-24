const express = require("express");
const app = express();

app.set("view engine", "ejs");

// rotas

app.get("/teste1",(req, res) => { //acessos http://localhost/teste1
    let nome = "Artur Todeschini";
    let lang = "javascript";

    res.render("testes", {
        nome: nome,
        lang: lang,
        "organizacao" : "Todeschini",
        "inscritos" : nome
    });
});


app.get("/teste2/:nome/:lang",(req, res) => { //acessos http://localhost/teste2/Artur/Java
    let nome = req.params["nome"];
    let lang = req.params["lang"];

    res.render("testes", {
        nome: nome,
        lang: lang,
        "organizacao" : "Todeschini",
        "inscritos" : nome
    });
});

app.listen(80, () => {
    console.log("Aplicação start");
})