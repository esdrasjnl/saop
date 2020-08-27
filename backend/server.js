const bodyparser = require('body-parser');
var express = require('express')
var http = require('http');
var app = express();
var mysqldb =require('./database');
const PORT = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//------------------------------------------------
app.listen(PORT, ()=>{
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
});

//Route
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API');
});
app.use('/api/usuarioCurso/',require('./routes/usuario_curso.router'));
app.use('/api/usuario/',require('./routes/usuario.router'));