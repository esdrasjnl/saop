const express=require('express');
const router=express.Router();

const usuario=require('../controller/usuario.controller');

router.get('/obtener',usuario.getUsuario);
router.get('/obtener/:id',usuario.getUsuarioId);
router.get('/obtenerUsuario/:carnet',usuario.getUserForcarnet);
router.post('/agregar',usuario.postUsuario);
module.exports=router;