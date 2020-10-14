const bodyparser = require('body-parser');
var express = require('express')
var http = require('http');
var app = express();
var mysqldb =require('./database');
var cors = require('cors');
//const mysql = require('mysql');
const { CLIENT_RENEG_LIMIT } = require('tls');
const PORT = process.env.PORT || 4000;

const usuario = require('./routes/usuario');
const usuarioCurso = require('./routes/usuario_curso.router');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
//------------------------------------------------


//------------------- Rutas -------------------
//app.use('/usuario', usuario);
//app.use('/usuarioCurso', usuarioCurso);

/*
Obtener un usuario por carnet
http://localhost:4000/api/usuario/obtenerUsuario/201512345

Obtener todos los usuarios
http://localhost:4000/api/usuario/obtener

Agregar un nuevo usuario
http://localhost:4000/api/usuario/agregar

consultar curso por cada usuario
http://localhost:4000/api/usuarioCurso/2023

//obtener detalle de un curso
http://localhost:4000/api/usuarioCurso/detalleCurso

//Eliminar un usuario
http://localhost:4000/api/usuarioCurso/detalleCurso

Login
Verbo GET
http://localhost:4000/api/usuario/inicioSesion

JSON de entrada
    {
        "carnet": "201512345",
        "clave": "123"
    }

JSON de retorno
    {
        "msg": "true"
    }
o si fuera falso
    {
        "msg": "false"
    }

//Ver cursos de pensum
http://localhost:4000/api/usuario/verPensum

JSON de entrada
{
    "carrera": "1"
}

JSON de salida
[
    {
        "codigo_curso": 3,
        "nombre_curso": "Orientacion y Liderazgo",
        "creditos": 1,
        "prerequisitos": "Ninguno",
        "detalle": "Curso que fomenta las aptitudes de orientacion y liderazgo",
        "codigo_pensum": 1,
        "pensum": "ingenieria industrial",
        "codigo_carrera": 1,
        "carrera": "Ingenieria en Ciencias y Sistemas"
    }
]

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
app.use('/api/usuarioEliminar/',require('./routes/usuario.router'));
//app.use('/api/usuarioCurso/', require('./routes/usuario_curso.router'));

//Check connect
mysqldb.connect();