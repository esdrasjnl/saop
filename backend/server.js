const bodyparser = require('body-parser');
//const mysql = require('mysql');
const express = require('express')
const http = require('http');
const { CLIENT_RENEG_LIMIT } = require('tls');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./database/db');

const usuario = require('./routes/usuario');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//------------------- Rutas -------------------
app.use('/usuario', usuario);

/*
Obtener un usuario por carnet
http://localhost:4000/usuario/obtenerUsuario/201512345

Obtener todos los usuarios
http://localhost:4000/usuario/obtener

Agregar un nuevo usuario
http://localhost:4000/usuario/agregar

*/
//------------------- Rutas -------------------

app.listen(PORT, ()=>{
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
});

//Route
app.get('/', (req, res)=>{
    res.send('SAOP API');
});

//Check connect
db.connect();