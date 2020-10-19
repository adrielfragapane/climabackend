const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require("../models/User");

/**************************************************************************************
 * 
 *  CONTROLADOR PRINCIPAL PARA EL INICIO DE SESIÓN Y CREACIÓN DE CUENTA
 * 
 **************************************************************************************/

const userController = {};

const SECRET_KEY = process.env.SECRET_KEY;

// Método para crear cuenta
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

// Método para iniciar sesión
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
        }
        else {
            return res.json({ status: 409, message: 'Password incorrecto'});
        }
    }
}

module.exports = userController;