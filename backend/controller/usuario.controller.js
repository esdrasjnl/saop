const usuarioCtrl={};
const mysqldb=require('../database');

usuarioCtrl.getUsuario=async function(req,res,next){
    const sql="SELECT * FROM usuario";
    mysqldb().query(sql,function(error,results){
        if(error) throw error;
        if(results.length >= 0){
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
}

module.exports=usuarioCtrl;