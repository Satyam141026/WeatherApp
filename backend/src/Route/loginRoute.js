const express=require('express');
const { loginController } = require('../Controller/loginController');
const loginRoute=express.Router();

loginRoute.post("/login", loginController);
    exports.loginRoute=loginRoute;