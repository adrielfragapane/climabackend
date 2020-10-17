const jwt = require('jsonwebtoken');

const Clima = require('../models/Weather');
const User = require('../models/User');
const climas = require('../clima');

const climaController = {};

const SECRET_KEY = process.env.SECRET_KEY;

climaController.getWheatherByCity = async (req,res) => {
    const clima = await Clima.findOne({city: req.params.city});
    return res.json(clima);
};

climaController.isAuthorized = (req,res,next) => {
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

const checkToken = async token => {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    return user !== null;
}


climaController.getCities = async (req,res) => {
    const cities = await Clima.find({},{'_id': 0, 'city': 1});
    res.json(cities);
};


climaController.createWheathers = async () => {
    try {
        await Clima.deleteMany();

        climas.climas.map(async clima => {
            //console.log(clima);
            const newClima = new Clima(clima);
            console.log(newClima);
            await newClima.save()
        });
    }
    catch(err) {
        console.log(err)
    }
    
}


module.exports = climaController;