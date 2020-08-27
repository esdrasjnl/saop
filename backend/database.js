const mysql = require('mysql');
//Conexión a MySQL
var URI={
    host: 'localhost',
    user: 'root',
    password: 'dbsamines',
    database: 'soap_fase2'
}
module.exports=()=>{
    return mysql.createConnection(URI)
   
}
/*var connection = mysql.createConnection(URI);
    /*.connect(err=>{
        if(error) throw error;
        console.log('Base de datos ejecutandose');
    }
connection.connect(err=>{
    if(error) throw error;
    console.log('Base de datos ejecutandose');
});*/


//All customers
/*app.get('/customers', (req, res) => {
    const sql = 'select * from usuario';

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

app.get('/customers/:id', (req, res) => {
    const { id } = req.params;
    const sql = `select * from usuario where idusuariocle = ${id}`;
    connection.query(sql, (error, result) => {
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        } else {
            res.send('No hay resultados');
        }
    });
});

app.post('/add', (req, res) =>{
    const sql = 'insert into usuario set?';

    const customerObj = {
        nombreusuario: req.body.nombreusuario,
        primernombre: req.body.primernombre,
        segundonombre: req.body.segundonombre,
        primerapellido: req.body.primerapellido,
        segundoapellido: req.body.segundoapellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        fotografia: req.body.fotografia,
        idrol: req.body.idrol
    };

    connection.query(sql, customerObj, error => {
        if(error) throw error;
        res.send('Usuario Creado');
    });
});

app.put('/update/:idusuario', (req, res) =>{
    const { idusuario } = req.params;
    const {nombreusuario, primernombre, segundonombre, primerapellido, segundoapellido, direccion, telefono, correo} = req.body;
    const sql = `update usuario set nombreusuario = '${nombreusuario}', primernombre = '${primernombre}', segundonombre = '${segundonombre}', 
    primerapellido = '${primerapellido}', segundoapellido = '${segundoapellido}', direccion = '${direccion}', telefono = '${telefono}', 
    correo = '${correo}' where idusuario = '${idusuario}' `;

    connection.query(sql, error => {
        if(error) throw error;
        res.send('Usuario Actualizado');
    });
});

app.delete('/delete/:idusuario', (req, res) =>{
    const { idusuario } = req.params;
    const sql = `delete from usuario where idusuario = ${idusuario}`;

    connection.query(sql, error => {
        if(error) throw error;
        res.send('Usuario Eliminado');
    });
});*/
