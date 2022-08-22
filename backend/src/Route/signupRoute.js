const express=require('express');
const app=express()
const { signupController } = require('../Controller/signupController');
const { upload } = require('../Midleware/upload');
const singupRoute=express.Router();
app.use('/uploads',express.static('uploads'))
singupRoute.post("/post",upload, signupController);
   
   exports.singupRoute=singupRoute;