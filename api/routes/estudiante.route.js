'use strict'

var express = require('express');
var controlador = require('../controllers/estudiante.controller');
var api = express.Router();

api.get('/obtenerDatos/:dni?', controlador.getEstudiante);
api.post('/actualizar', controlador.actualizarEstudiante);
api.get('/historial', controlador.obtenerHistorial);
api.get('/historial/:dni?', controlador.obtenerHistorialEstudiante);

module.exports = api;