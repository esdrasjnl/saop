const mysql=require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dbsamines',
    database: 'soap_fase2'
});

before(done =>{
    connection.connect( function(err){
        if(!err) {
            console.log('Conexión Establecida con la base de datos test');
            done();
            return true;
        } else {
            console.log("Error:", err);
            return err;
        }
    });
})