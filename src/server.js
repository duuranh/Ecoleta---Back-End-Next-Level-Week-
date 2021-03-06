const express = require("express")
const server = express("")


// Configurar pasta pública;
server.use(express.static("public"))


//Utilizando Template Engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// Configurar caminhos da minha aplicação;
// Página Inicial (Home-Page);
// req: Requisição (Pedido);
// res: Resposta;
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


// Ligar o Servidor;
server.listen(3000)