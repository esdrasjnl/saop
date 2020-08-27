const bodyparser = require('body-parser');
const mysql = require('mysql');
var express = require('express')

var http = require('http');
var app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//------------------------------------------------

//Conexión a MySQL

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '110896',
    database: 'saop_fase2'
});

//Check connect
connection.connect(error=>{
    if(error) throw error;
    console.log('Base de datos ejecutandose!');
});

app.listen(PORT, ()=>{
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
});

//Route
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API');
});

