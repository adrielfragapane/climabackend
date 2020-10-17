const express = require('express');
const weatherController = require('../controllers/weather.controller');
const routerClima = express.Router();

routerClima.get('/cities',weatherController.isAuthorized,weatherController.getCities);
routerClima.get('/:city',weatherController.isAuthorized,weatherController.getWheatherByCity);


module.exports = routerClima;