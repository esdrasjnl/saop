const { Router } = require('express');
const router = Router();
const bd = require('../database');

router.get('/obtener', (req, res) => {
    const sql = 'select * from usuario';

    bd.connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

router.get('/obtener/:id', (req, res) => {
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

router.post('/agregar', (req, res) =>{
    const sql = 'insert into usuario set?';

    const UsuarioObj = {
        carnet: req.body.carnet,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        cui: req.body.cui,
        clave: req.body.clave,
        ref_codigo_carrera: req.body.ref_codigo_carrera
    };

    bd.connection.query(sql, UsuarioObj, error => {
        if(error) throw error;
        res.send('Usuario Creado');
    });
});

router.get('/obtenerUsuario/:carnet', (req, res) => {
    const { carnet } = req.params;
    const sql = `select * from usuario where carnet = ${carnet}`;
    bd.connection.query(sql, (error, result) => {
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        } else {
            res.send('No hay resultados');
        }
    });
});

module.exports = router;
