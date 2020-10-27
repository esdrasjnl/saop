const usuarioCtrl = {};
const mysqldb = require('../database');

usuarioCtrl.getUsuario = async function (req, res, next) {
    const sql = 'select * from usuario';

    mysqldb.connection.query(sql, function (error, results) {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
}
//metodos de esdras
usuarioCtrl.getUsuarioId = async function (req, res, next) {
    const { id } = req.params;
    const sql = `select * from usuario where idusuariocle = ${id}`;
    mysqldb.connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No hay resultados');
        }
    });
}

usuarioCtrl.postPensum = async function (req, res, next) {
    const { carrera } = req.body;
    const sql = `select cr.codigo_curso,cr.nombre_curso,cr.creditos,cr.prerequisitos,
    cr.detalle,pn.codigo_pensum,pn.carrera as 'pensum',car.codigo_carrera,car.nombre as 'carrera' from curso_pensum
    INNER JOIN curso cr ON curso_pensum.ref_codigo_curso=cr.codigo_curso
    INNER JOIN pensum pn ON curso_pensum.ref_codigo_pensum=pn.codigo_pensum
    INNER JOIN carrera car ON curso_pensum.ref_codigo_carrera=car.codigo_carrera
    WHERE car.codigo_carrera = ${carrera}`;
    mysqldb.connection.query(sql, (error, result) => {
        /* if(error) throw error;
         if(result.length > 0){
             res.json(result);
         } else {
             res.send('No hay resultados');
         }*/
        if (result === undefined) {
            res.json({ error: "Noresult" })
        } else {
            res.json(result);

        }
    });
}

usuarioCtrl.postUsuario = async function (req, res, next) {
    let {carnet,nombre,apellidos,cui,clave,ref_codigo_carrera}=req.body;
    const UsuarioObj = {
        carnet: req.body.carnet,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        cui: req.body.cui,
        clave: req.body.clave,
        ref_codigo_carrera: req.body.ref_codigo_carrera
    };
    let validaParametro=!nombre || !apellidos || !clave ||!ref_codigo_carrera || isNaN(carnet) || isNaN(cui);
    if(validaParametro){
        return res.json({'estado':'Datos no validos o Faltan datos'});
    }else{ 
    const sql = 'insert into usuario set?';
    const sqlvalida=`select count(*) as retorno from usuario where carnet=${carnet} or cui=${cui}`;
    mysqldb.connection.query(sqlvalida,function(req,results){
            var validar=results[0].retorno;
            if(parseInt(validar)===0){// significa que no hay datos con el mismo carnet/cui registrado    
                mysqldb.connection.query(sql, UsuarioObj, error => {
                    if (error) throw error;
                    res.json({ 'estado': 'true' });
                });
            }else{//ya hay datos con los mismos identificadores
                res.json({'estado':'datos repetidos'});
            }
    });
    }
}


usuarioCtrl.getUserForcarnet=async function(req,res,next){
    const { carnet } = req.params;
    //const sql = `select * from usuario where carnet = ${carnet}`;
    const sql = `select usuario.carnet as Carnet, usuario.nombre, usuario.apellidos, usuario.cui, usuario.clave, carrera.nombre as Carrera, sum(curso.creditos) as Creditos from usuario
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

usuarioCtrl.deleteUser = async function (req, res, next) {
    const { carnet } = req.params;
    const sql = `delete from usuario where carnet = ${carnet}`;
    mysqldb.connection.query(sql, error => {
        if (error) throw error;
        res.send('Usuario Eliminado');
    });
}

usuarioCtrl.loginUsuario = async function (req, res, next) {
    const { carnet, clave } = req.body;
    const sql = `select * from usuario where carnet = ${carnet} and clave = '${clave}'`;
    mysqldb.connection.query(sql, (error, result) => {
        try {
            if (carnet == "" || clave == "") {
                res.send('No hay resultados');
            } else {
                if (error) throw error;
                if (result.length > 0) {
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
            }   
        } catch (error) {
            res.send('Error');
        }
    });
}

module.exports = usuarioCtrl;