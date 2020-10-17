const express = require('express');
const routerUser = express.Router();

const userController = require('../controllers/user.controller');

routerUser.post('/signin',userController.singin);
routerUser.post('/login',userController.login);

module.exports = routerUser;