'use strict'

var model = require('../models/estudiante.model');

var getEstudiante = (req, res) =>{
    console.log(req.params);
    model.getEstudiante(req.params.dni, (error, result) => {
        if (error) {
            res.status(500).send({ message: 'GET Error.' });
        }else{
            console.log(result)
            if(result.message){
                res.status(200).send({message: result.message});
            }else{
                res.status(200).send(result[0]);
            }
        }
    }); 
};

var actualizarEstudiante = (req, res) =>{
    console.log(req.body)
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