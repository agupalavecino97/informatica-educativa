'use stric'  

var express = require ('express');
var bodyParser = require('body-parser');
var app = express();


// cargar rutas
var estudiante_route = require('./routes/estudiante.route');


//cargo los middlewares: se ejecutan antes que las funciones cuando se hace una peticion http
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());  // convierte lo que trae la peticion a un objeto json


//configurar cabeceras y CORS
 app.use((req, res, next)=>{
     res.header("Access-Control-Allow-Origin","*");
     res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Authorization');
     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
     next();
 });

app.use('/api/estudiantes', estudiante_route);

module.exports = app;