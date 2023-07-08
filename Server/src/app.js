const express = require('express');
const server = express();
const router = require('./routes')
const logger = require('morgan');

server.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //Autorizo recibir solicitudes de este dominio
    res.header("Access-Control-Allow-Origin", "*"); //Autorizo recibir solicitudes de cualquier dominio
    res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    ); //Autorizo recibir solicitudes con dichos hedears
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
    next();
});

//* Middelwares
//! si no usamos express.json() la info por body llega solo así {}
server.use(express.json()); //TODO: <- body info
server.use(express.urlencoded({ extended: false })); //TODO: <- body info X INPUTS de FORMULARIOS
//* extended: false <-> datos que vienen de un form simple

server.use(logger("dev"));
server.use('/rickandmorty', router)

module.exports = server 