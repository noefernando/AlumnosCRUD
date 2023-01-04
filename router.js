const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
//Enrutamiento rutas

//Ruta de registros "CREATE"
router.get('/create',(req,res)=>{
    //plantilla
    res.render('create')
});

//Lectura READ
router.get('/',(req,res)=>{
    
    conexion.query('SELECT*FROM alumno',(error,results)=>{
        if(error){
            throw error;
        }else{
            //plantilla
            res.render('index',{results:results});
        }
    });
});

//Ruta de edición "UPDATE"
router.get('/edit/:id',(req,res)=>{
    const id= req.params.id;
    conexion.query('SELECT * FROM alumno where id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            //plantilla
            res.render('edit',{user:results[0]});
        }
    });
});

//Eliminar DELETE
router.get('/delete/:id',(req,res)=>{
    const id= req.params.id;
    conexion.query('DELETE FROM alumno WHERE id = ?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});

//invocación de metodo
const crud = require('./controllers/crud');
router.post('/save',crud.save);
router.post('/update',crud.update);
module.exports = router;