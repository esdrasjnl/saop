const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '18.191.250.168',
    user: 'saop',
    password: '123',
    database: 'saop_fase2'
});

exports.connection = connection;

// Comprobar conexion
exports.connect = function(){
    connection.connect(function(err){
        if(!err) {
            console.log('Conexión Establecida con la base de datos');
            return true;
        } else {
            console.log("Error:", err);
            return err;
        }
    });
};
