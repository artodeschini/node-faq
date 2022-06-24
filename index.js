const express = require("express");
const app = express();

app.set("view engine", "ejs");

//arquivos estaticos js, css, imagens etc 
app.use(express.static("public"));



// rotas
app.get("/", (req, res) =>{
    res.render("index")
});

// testes base
app.get("/teste1",(req, res) => { //acessos http://localhost/teste1
    let nome = "Artur Todeschini";
    let lang = "javascript";
    let showMsg = true;

    res.render("testes/testes1", {
        nome: nome,
        lang: lang,
        "organizacao" : "Todeschini",
        "inscritos" : nome,
        "msg" : showMsg
    });
});


app.get("/teste2/:nome/:lang",(req, res) => { //acessos http://localhost/teste2/Artur/Java
    let nome = req.params["nome"];
    let lang = req.params["lang"];
    let showMsg = false;

    res.render("testes/testes2", {
        nome: nome,
        lang: lang,
        "organizacao" : "Todeschini",
        "inscritos" : nome,
        "msg" : showMsg
    });
});

app.get("/teste3",(req, res) => { //acessos http://localhost/teste3

    let produtos =[
        {nome: "Coca-Cola", quantidade: 2, unidade: "litro", preco: 5.5},
        {nome: "Doritos", quantidade: 1, unidade: "Saco", preco: 2.0},
        {nome: "Livro", quantidade: 1, unidade: "livro", preco: 100.5}
    ];

    res.render("testes/testes3", {
        produtos: produtos
    });
});

app.listen(80, () => {
    console.log("Aplicação start");
})