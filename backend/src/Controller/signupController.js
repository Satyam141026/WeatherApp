const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';

const userDetail=require('../Model/userDetail')
const signupController=async (req,resp) => {
    console.log(req.body)
      let user=new userDetail({
       name:req.body.name,
       email:req.body.email,
       password:req.body.name
      // img:req.file.filename  
      }); //This line for retrive data from postmen
      if(req.file){
   
       user.img=req.file.filename  
   
      }
      let result = await user.save();
      result = result.toObject();
      delete result.password
      Jwt.sign({result}, jwtKey, {expiresIn:"2h"},(err,token)=>{
          if(err){
              resp.send("Something went wrong")  
          }
          resp.send({result,auth:token})
      })
   }
   exports.signupController=signupController;