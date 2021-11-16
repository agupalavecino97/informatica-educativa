'use stric' 

var app = require('./app');
var port = process.env.PORT || 3785;
var connection = require('./connection');

connection.connect(function(error){
    if(error){
        console.log('Ocurrio un error en la conexion con la base de datos: ', error);
    }else{
        app.listen(port, function(){
            console.log("Esta escuchando en el puerto: " + port + ". http://localhost:" + port +" y conectado a la base de datos.\n...\n");
        });
    }
});