const bodyparser = require('body-parser');
var express = require('express')
var http = require('http');
var app = express();
var mysqldb =require('./database');
//const mysql = require('mysql');
const { CLIENT_RENEG_LIMIT } = require('tls');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./database/db');

const usuario = require('./routes/usuario');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
<<<<<<< HEAD
//------------------------------------------------


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
app.use('/api/usuarioCurso/',require('./routes/usuario_curso.router'));
app.use('/api/usuario/',require('./routes/usuario.router'));

//Check connect
db.connect();
