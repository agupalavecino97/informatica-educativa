'use strict'

var express = require('express');
var controlador = require('../controllers/estudiante.controller');
var api = express.Router();

api.get('/:dni?', controlador.getEstudiante);
api.post('/actualizar', controlador.actualizarEstudiante);
api.post('/historial', controlador.obtenerHistorial);
api.post('/historial/:dni?', controlador.obtenerHistorialEstudiante);

module.exports = api;