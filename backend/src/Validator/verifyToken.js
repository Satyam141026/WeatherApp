

const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com';

const verifyToken=()=>(req,resp,next)=>{
    let token=req.headers['authentication'];
    
    
    if(token){
      token=token.split(' ')[1];
     console.warn('midllwarecalled if',token)
     // console.warn('midllwarecalled if',token)
      Jwt.verify(token,jwtKey,(err, valid)=>{
        if(valid){
          //resp.send({result:'token match'})
       next();
        }
        else{
          resp.status(401).send({result:'please provide valid token'})
          
        }
    
      })
    
    }else{
    resp.status(403).send({result:'please add token with header'})
    }
    
      
    }

    exports.verifyToken=verifyToken;
    