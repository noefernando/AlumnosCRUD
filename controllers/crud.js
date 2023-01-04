const conexion = require('../database/db');

//ACCIONES DE CRUD

//CREATE --Uso de captura de datos y consulta INSERT--

exports.save = (req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const genero = req.body.genero;
    const grupo = req.body.grupo;
    const grado = req.body.grado;    
    conexion.query('INSERT INTO alumno SET ?',{nombre:nombre,apellido:apellido,edad:edad,genero:genero,grado:grado,grupo:grupo},
    (error,results)=>{
        if(error){
            throw error;
        }else{
            //Redirección a la raiz
            res.redirect('/');
        }
    });
}

//UPDATE --asignación de valores a actualizar en array con el apartado de la variable ID--

exports.update = (req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const genero = req.body.genero;
    const grupo = req.body.grupo;
    const grado = req.body.grado;
    conexion.query('UPDATE `alumno` SET ? WHERE id=?',[{nombre:nombre, apellido:apellido, edad:edad, genero:genero, grado:grado, grupo:grupo},id],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            //Redirección a la raiz
            res.redirect('/');
        }
    });
}