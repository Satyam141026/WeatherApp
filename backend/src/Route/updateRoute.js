const express=require('express');
const { updateController } = require('../Controller/updateController');
const Jwt = require('jsonwebtoken');
const { verifyToken } = require('../Validator/verifyToken');
const jwtKey = 'e-com';
const updateRoute=express.Router();



updateRoute.put('/update/:_id',verifyToken,updateController)

exports.updateRoute=updateRoute;