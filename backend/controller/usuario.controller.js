const usuarioCtrl={};
const mysqldb=require('../database');

usuarioCtrl.getUsuario=async function(req,res,next){
    const sql = 'select * from usuario';

    mysqldb.connection.query(sql, function(error,results){
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
}
//metodos de esdras
usuarioCtrl.getUsuarioId=async function(req,res,next){
    const { id } = req.params;
    const sql = `select * from usuario where idusuariocle = ${id}`;
    mysqldb.connection.query(sql, (error, result) => {
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        } else {
            res.send('No hay resultados');
        }
    });
}
usuarioCtrl.postUsuario=async function(req,res,next){
    const sql = 'insert into usuario set?';

    const UsuarioObj = {
        carnet: req.body.carnet,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        cui: req.body.cui,
        clave: req.body.clave,
        ref_codigo_carrera: req.body.ref_codigo_carrera
    };

    mysqldb.connection.query(sql, UsuarioObj, error => {
        if(error) throw error;
        res.send('Usuario Creado');
    });
}

usuarioCtrl.getUserForcarnet=async function(req,res,next){
    const { carnet } = req.params;
    const sql = `select * from usuario where carnet = ${carnet}`;
    mysqldb.connection.query(sql, (error, result) => {
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        } else {
            res.send('No hay resultados');
        }
    });
}   

usuarioCtrl.deleteUser = async function(req,res,next){
    const { carnet } = req.params;
    const sql = `delete from usuario where carnet = ${carnet}`;
    mysqldb.connection.query(sql, error => {
        if(error) throw error;
        res.send('Usuario Eliminado');
    });
}

module.exports=usuarioCtrl;