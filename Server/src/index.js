var fs = require("fs");
var http = require("http")
const data = require("./utils/data.js");

const PORT = 3001;

/* module.exports = http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);

    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === "/rickandmorty/character") {
        fs.readFile("./utils/data.js", (err, data) => {
            if (err) {
                res.writeHead(404, { "content_type": "text/plain" })
                res.end("json not found")
            } else {
                res.writeHead(200, { "content_type": "application/json" })
                res.end(data)
            }
        });
        return
    }
}) */

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')) {
        const urlParts = req.url.split('/');
        const id = urlParts[urlParts.length - 1];

        const character = data.find((character) => character.id === Number(id));

        if (character) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(character));
        } else {
            res.statusCode = 404;
            res.end('Personaje no encontrado');
        }
    } else {
        res.statusCode = 404;
        res.end('Ruta no válida');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en ${PORT}/`);
});