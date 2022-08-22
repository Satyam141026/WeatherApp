const updateController=( async (req,recp)=>{
    let data=await userDetail.updateOne(req.params.id,{$set:req.body}) 
    recp.send(data)
  
  })
  exports.updateController=updateController;