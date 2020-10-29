const usuarioCtrl = {};
const mysqldb = require('../database');

usuarioCtrl.getUserForcarnet=async function(req,res,next){
    const { carnet } = req.params;
    let parametroValido=isNaN(carnet);
    if(parametroValido){
        res.json({"estado":"Paramtros no validos"})
    }else{
        const sql = `select round((sum(curso.creditos)/250)*100,2) as Porcentaje from usuario
        join usuario_curso on usuario_curso.ref_carnet = usuario.carnet 
        join curso on curso.codigo_curso = usuario_curso.ref_codigo_curso
        join carrera on carrera.codigo_carrera = usuario.ref_codigo_carrera 
        where usuario.carnet = ${carnet} and usuario_curso.estado = 1;`;
        mysqldb.connection.query(sql, (error, result) => {
            if(error) throw error;
            if(result.length > 0){
                res.json(result);
            } else {
                res.send('No hay resultados');
            }
        });
    }
    //const sql = `select * from usuario where carnet = ${carnet}`;
}

usuarioCtrl.getUserForcarnetSuma=async function(req,res,next){
    const { carnet } = req.params;
    let parameterValid=isNaN(carnet);
    if(parameterValid){
        res.json({"estado":"datos no validos"});
    }else{
            //const sql = `select * from usuario where carnet = ${carnet}`;
    const sql = `select sum(curso.creditos) as Creditos from usuario
    join usuario_curso on usuario_curso.ref_carnet = usuario.carnet 
    join curso on curso.codigo_curso = usuario_curso.ref_codigo_curso
    join carrera on carrera.codigo_carrera = usuario.ref_codigo_carrera 
    where usuario.carnet = ${carnet} and usuario_curso.estado = 1;`;
    mysqldb.connection.query(sql, (error, result) => {
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        } else {
            res.send('No hay resultados');
        }
    });
    }
}

module.exports = usuarioCtrl;