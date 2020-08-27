const express=require('express');
const router=express.Router();

const usuario=require('../controller/usuario.controller');

router.get('/',usuario.getUsuario);

module.exports=router;