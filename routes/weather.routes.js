const express = require('express');
const weatherController = require('../controllers/weather.controller');
const weatherRouter = express.Router();

/**************************************************************************************
 * 
 *  MROUTER PARA DATOS DEL CLIMA
 * 
 **************************************************************************************/

weatherRouter.get('/cities',weatherController.isAuthorized,weatherController.getCities);
weatherRouter.get('/:city',weatherController.isAuthorized,weatherController.getWheatherByCity);

module.exports = weatherRouter;