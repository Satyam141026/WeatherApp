const mongoose=require('mongoose');
const userDeatil = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    img:String
  
  });
  module.exports=mongoose.model("userDetails",userDeatil);