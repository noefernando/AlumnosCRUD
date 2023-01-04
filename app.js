const { json } = require('body-parser');
const exp = require('constants');
const express = require ('express');
const app = express ();

app.set('view engine','ejs');

//captura de datos de form

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/',require('./router'));

//Asignacion del puerto

app.listen(5000,()=>{
    console.log('Server corriendo en local');
});