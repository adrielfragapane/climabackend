const jwt = require('jsonwebtoken');

const Clima = require('../models/Weather');
const User = require('../models/User');
const climas = require('../clima');

/**************************************************************************************
 * 
 *  CONTROLADOR PRINCIPAL PARA LA OBTENCIÓN DE CIUDADES Y CLIMAS
 * 
 **************************************************************************************/

const weatherController = {};

const SECRET_KEY = process.env.SECRET_KEY;

// Método para obtener los nombres de las ciudades disponibles
weatherController.getCities = async (req,res) => {
    const cities = await Clima.find({},{'_id': 0, 'city': 1});
    res.json(cities);
};

// Método para obtener el clima de una ciudad en específico
weatherController.getWheatherByCity = async (req,res) => {
    const clima = await Clima.findOne({city: req.params.city});
    return res.json(clima);
};

// Método para validar la autorización
weatherController.isAuthorized = (req,res,next) => {
    const token = req.headers['authorization'] || '';

    jwt.verify(token, SECRET_KEY,async (err,value) => {
        if(err) {
            return res.json({ status: 403, message: 'Sin permisos'});
        }
        else {
            return next();
        }
    });
}



module.exports = weatherController;