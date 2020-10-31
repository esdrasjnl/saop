const express=require('express');
const router=express.Router();

const usuario=require('../controller/creditos.controller');

router.get('/creditosPorcentaje/:carnet',usuario.getUserForcarnet);
router.get('/creditosSuma/:carnet',usuario.getUserForcarnetSuma);
module.exports=router;