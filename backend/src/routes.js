const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const ongController = require('./controllers/ongcontroller');
const incidentsController = require('./controllers/incidentcontroller');
const profileController = require('./controllers/profilecontroller');
const sessionController = require('./controllers/sessioncontroller');

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.listAll);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentsController.listAll);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentsController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.list);

module.exports = routes;