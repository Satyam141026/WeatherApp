const mongose = require("mongoose");
const express = require("express");
const db=require('./Config/db')

const userDetail = require("./Model/userDetail");

const app=express();
const cors=require("cors")
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';
var bodyParser = require('body-parser');

const multer = require('multer');
const { singupRoute } = require("./Route/signupRoute");
const { loginRoute } = require("./Route/loginRoute");
const { updateRoute } = require("./Route/updateRoute");
const PORT=process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'))



//routes 
app.use(singupRoute)
app.use(loginRoute)
app.use(updateRoute)



if(process.env.NODE_ENV=="production"){
  app.use(express.static("client/build"))
  app.get("*",((req,resp)=>{
    resp.sendFile(path.resolve(__dirname,'client','build','index.html'));
  
  }))
  
}



app.listen(PORT);