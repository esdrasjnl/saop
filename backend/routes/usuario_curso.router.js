const express=require('express');
const router=express.Router();

const userCurso=require('../controller/usuario_curso.controller');

router.get('/:id',userCurso.getUsuarioCurso);

module.exports=router;
