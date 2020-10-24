const userCourseCtrl = {};
const mysqldb = require('../database');

userCourseCtrl.getUsuarioCurso = async function (req, res, next) {
    const { id } = req.params;
    const sql = `SELECT usuario.nombre,usuario.carnet,` +
        `curso.codigo_curso,curso.nombre_curso,curso.creditos,` +
        `usuario_curso.estado ` +
        `from usuario_curso ` +
        `INNER JOIN usuario ON usuario_curso.ref_carnet=usuario.carnet ` +
        `INNER JOIN curso ON  usuario_curso.ref_codigo_curso=codigo_curso ` +
        `WHERE usuario.carnet = '${id}'`;
    mysqldb.connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length >= 0) {
            return res.json(results);
        } else {
            return res.send('No hay resultados');
        }
    });
}

userCourseCtrl.agregaUsuarioCurso = async function (req, res, next) {
    let { ref_carnet, ref_codigo_curso, estado, str_comentario } = req.body;
    const validacion = `select count(*) as retorno from usuario_curso where ref_carnet = ${ref_carnet} and ref_codigo_curso = ${ref_codigo_curso} and estado = 1`;
    console.log('ver lo que viene');
    console.log(ref_carnet);
    let validaParametro=isNaN(ref_carnet) || isNaN(ref_codigo_curso) || isNaN(estado) || !ref_carnet || !ref_codigo_curso || !estado || ref_carnet===' ' || ref_codigo_curso===' ' || estado===' ';
    if(validaParametro){
        return res.json({'estado':'datos no validos'});
    }else{
        mysqldb.connection.query(validacion, function (err, results) {
            if (err) {
                throw err;
            }
            //console.log(results[0]);
            var existeDato = results[0].retorno;
            console.log(existeDato);
            if (parseInt(existeDato) === 0) {
                const sql = 'insert into usuario_curso set?';
                const UsuarioObj = {
                    ref_carnet: req.body.ref_carnet,
                    ref_codigo_curso: req.body.ref_codigo_curso,
                    estado: req.body.estado,
                    str_comentario: req.body.str_comentario
                };
    
                mysqldb.connection.query(sql, UsuarioObj, error => {
                    if (error) throw error;
                    //res.send('Curso Agregado al Usuario');
                    res.json({ "Registro": "true" });
                });
            } else {
                res.json({ 'estado': 'Datos Repetidos' });
            }
        });
    }
}

userCourseCtrl.getDetalleCurso = async function (req, res, next) {
    const objeto = {
        carnet: req.body.carnet,
        codigo_curso: req.body.codigo_curso
    }
    const sql = `SELECT usuario.nombre,usuario.carnet,` +
        `curso.nombre_curso,curso.creditos,` +
        `usuario_curso.estado ` +
        `from usuario_curso ` +
        `INNER JOIN usuario ON usuario_curso.ref_carnet=usuario.carnet ` +
        `INNER JOIN curso ON  usuario_curso.ref_codigo_curso=codigo_curso ` +
        `WHERE usuario.carnet=${req.body.carnet} ` +
        `and curso.codigo_curso=${req.body.codigo_curso}`;

    mysqldb.connection.query(sql, [req.body.carnet, req.body.codigo_curso], (error, results) => {
        if (results === undefined) {
            return res.json({ hola: "fail" });
        } else {
            return res.json(results);
        }
    });
}
module.exports = userCourseCtrl;