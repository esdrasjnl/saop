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

usuarioCtrl.postPensum = async function(req,res,next){
    const { carrera } = req.body;
    const sql = `select cr.codigo_curso,cr.nombre_curso,cr.creditos,cr.prerequisitos,
    cr.detalle,pn.codigo_pensum,pn.carrera as 'pensum',car.codigo_carrera,car.nombre as 'carrera' from curso_pensum
    INNER JOIN curso cr ON curso_pensum.ref_codigo_curso=cr.codigo_curso
    INNER JOIN pensum pn ON curso_pensum.ref_codigo_pensum=pn.codigo_pensum
    INNER JOIN carrera car ON curso_pensum.ref_codigo_carrera=car.codigo_carrera
    WHERE car.codigo_carrera = ${carrera}`;
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

    console.log(req.body.carnet);
    if(req.body.carnet === undefined  || req.body.cui === undefined || req.body.nombre === undefined || req.body.apellidos === undefined || req.body.clave === undefined ){
        return res.json({'Msg':'Faltan Datos'});
        //console.log(req.body.carnet);
    }
    mysqldb.connection.query(sql, UsuarioObj, error => {
        if(error) throw error;
        //res.send('Usuario Creado');
        res.json({'estado': 'true'});
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

usuarioCtrl.loginUsuario = async function(req,res,next){
    const { carnet, clave } = req.body;
    const sql = `select * from usuario where carnet = ${carnet} and clave = '${clave}'`;
    mysqldb.connection.query(sql, (error, result) => {
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
            /*
            res.status(201).json({
                msg: "true",
            });
            */
        } else {
            res.send('No hay resultados');
            /*
            res.status(201).json({
                msg: "false"
            });
            */
        }
    });
} 

module.exports=usuarioCtrl;