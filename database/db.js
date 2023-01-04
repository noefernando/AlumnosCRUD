const mysql =require('mysql');

//Conexion a db estudiantes

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'estudiantes'
});

//Comprobación de conexión

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es:'+error);
        return
    }
    console.log('Conexón exitosa a la DB estudiantes')
});

module.exports = conexion;