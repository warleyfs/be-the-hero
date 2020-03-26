const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongcontroller');
const incidentsController = require('./controllers/incidentcontroller');
const profileController = require('./controllers/profilecontroller');
const sessionController = require('./controllers/sessioncontroller');

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.listAll);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentsController.listAll);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.list);

module.exports = routes;