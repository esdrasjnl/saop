const mysql = require("mysql");
const connection = mysql.createConnection({
    host: '3.128.91.37',
    user: 'saop',
    password: '123',
    database: 'saop_fase2'
});

before(done => {
    connection.connect(function(err) {
        if (!err) {
            console.log('Conexión Establecida con la base de datos test');
            done();
            return true;
        } else {
            console.log("Error:", err);
            return err;
        }
    });
})