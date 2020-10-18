const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require("../models/User");

const userController = {};

const SECRET_KEY = process.env.SECRET_KEY;

userController.singin = async (req,res) => {

    const newUser = new User(req.body);
    newUser.password = await newUser.encryptPassword(req.body.password);
    await newUser.save((err,user) => {
 
        if(err && err.code == 11000) {
            return res.json({status: 409, message: 'Este email ya se encuentra registrado'});
        } 
        if(err) {
            console.log(err)
            return res.json({status: 500, message: 'Error en el servidor'});
        }
        const expiresIn = 30;
        const accessToken = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: expiresIn});
        const userData = {
            email: user.email,
            password: user.password,
            accessToken: accessToken,
            expiresIn: expiresIn
        }
        return res.send({status: 200, ...userData});
    });
}

userController.login = async (req,res) => {

    const user = await User.findOne({email: req.body.email});

    if(!user) {
        return res.json({status: 404, message: 'El email no está registrado'});
    } 
    else {
        const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if (isValidPassword) {
            const expiresIn = 30;
            console.log(SECRET_KEY);
            const accessToken = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: expiresIn});
            const userData = {
                email: user.email,
                password: user.password,
                accessToken: accessToken,
                expiresIn: expiresIn
            }
            return res.send({status: 200, ...userData});
            //return res.json({informacionUsuario, status: 200, message: 'Usuario logueado correctamente'});
        }
        else {
            return res.json({ status: 409, message: 'Password incorrecto'});
        }
    }
}

userController.subscribe = async (req,res) => {
    const token = req.headers['authorization'] || '';
    if(token) {
        const { counterId } = req.params;
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if(!user.suscriptions.includes(counterId)) {
            user.suscriptions.push(counterId);
            await user.save();
        }        
    }
}

userController.unsubscribe = async (req,res) => {
    const token = req.headers['authorization'] || '';
    if(token) {
        const { counterId } = req.params;
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if(user.suscriptions.includes(counterId)) {
            user.suscriptions.splice(user.suscriptions.indexOf(counterId),1);
            await user.save();
        }        
    }
}

module.exports = userController;