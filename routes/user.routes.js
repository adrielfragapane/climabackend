const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user.controller');

/**************************************************************************************
 * 
 *  ROUTER PARA AUTENTICACIÓN
 * 
 **************************************************************************************/

userRouter.post('/signin',userController.singin);
userRouter.post('/login',userController.login);

module.exports = userRouter;