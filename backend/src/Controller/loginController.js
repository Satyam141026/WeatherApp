
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';


const userDetail=require('../Model/userDetail')
const loginController=async (req,resp) => {
    /*   let data=await userDetail.findOne(req.body); //This line for retrive data from postmen
      recp.send(data);
      console.log(data) */
      console.log(req.body)
      if(req.body.email){
      let data=await userDetail.findOne(req.body).select("-password");
      
        if(data){
          Jwt.sign({data},jwtKey,{expiresIn:'2h'},(err,token)=>{
    
           
            if(err){
              resp.send({result:"Something is wrong"})
    
            }
            resp.send({data,auth:token});
          })
        
        }
        else{
          resp.send("data is not match");
        }
      }
      else{
        resp.status(400).json({
          msg:"error",
          data:error
      });
      }
    }
    exports.loginController=loginController