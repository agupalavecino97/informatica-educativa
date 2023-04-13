
'use strict'

var connection = require('../connection');

var model = {id: null}; 


model.getEstudiante = function(dni, callback){
	if (connection) 
    {  
        var select_estudiante = 
        'SELECT estudiante.* '+   
        'FROM estudiantes as  estudiante '+
        'WHERE estudiante.dni = ' + connection.escape(dni) ;  
 
		connection.query(select_estudiante, function(error, result_select) {
			if(error){
                callback(null, {"message":error});
            }else{
                if (result_select.length == 0){
                    callback(null, {"message":'estudiante no cargado'});
                }else{
                    callback(null, result_select);
                }
			}
		});
	}
}


model.actualizarEstudiante = function(data, callback){	
	if(connection){	
        var actualizacion = 'UPDATE estudiantes SET ' + 
        'puntuacion = ' + connection.escape(data.estudiante.puntuacion) +
        ' WHERE dni = ' + connection.escape(data.estudiante.dni);
        // console.log(actualizacion);
        connection.query(actualizacion, function(error, result) {
            if(error) {   
                throw error;
                callback(null, {"error": 'ERROR actualizacion.'});
            }
            else{	
                let d = new Date();
                let date = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear() + ' - ' +d.getHours() + ':' + d.getMinutes() ;  
                var insert =
                "INSERT INTO historial (dni, fecha, correctas, incorrectas, codigoEvaluacion) " +
                "VALUES ( '" +
                data.estudiante.dni +
                "', '" +
                date +
                "', '" +
                data.correctas +
                "', '" +
                data.incorrectas +
                "', '" +
                data.codigoEvaluacion +
                "');";
                connection.query(insert, function (error, result_inert) {
                    if (error) {
                        throw error;
                        callback(null, { "error": "ERROR INSERT." });
                    } else {
                        callback(null, {"message": "Actualizado Correctamente"});                
                    }
                });

            }
        });
	}
}

module.exports = model;