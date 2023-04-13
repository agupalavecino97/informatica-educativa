'use strict'

var model = require('../models/estudiante.model');

var getEstudiante = (req, res) =>{
    model.getEstudiante(req.params.dni, (error, result) => {
        if (error) {
            res.status(500).send({ message: 'GET Error.' });
        }else{
            if(result.message){
                res.status(200).send({message: result.message});
            }else{
                res.status(200).send(result[0]);
            }
        }
    }); 
};

var actualizarEstudiante = (req, res) =>{
    model.actualizarEstudiante(req.body, (error, result) => {
        if(error){
            res.status(500).send({ message: 'GET Error.' });
        }else{
            if(result.message){
                res.status(200).send({message: result.message});
            }else{
                res.status(200).send(result);
            }
        }
    });
};

module.exports={
    getEstudiante,
    actualizarEstudiante
}