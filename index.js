const http = require('http');
const moduloTeste = require('./moduloTeste');
const contato =  require('./contato');
const fs = require('fs');


const server = http.createServer(function(req, res) {
    if (req.url == "/contato") {
        res.writeHeader(200, {"Content-Type": "text/html"})
        return res.end(contato);
    }
    res.end("<div style='margin: 23% 42%'><h1>Parabens!</h1><p>Voce acessou o servidor!!!</p></div");
});

//localhost = 127.0.0.1

server.listen(3030, 'localhost', function() {
    console.log("Servidor Iniciou com Sucesso!");
});
