const {AuthenticationError} = require('apollo-server-express');
const mongoose=require('mongoose');
module.exports={
    showWorkers: async (parent,args,{models})=>{
        return models.Worker.find();
    },
    getMyWorkers: async (parent,args,{models,user})=>{
        if (!user){
            throw new AuthenticationError("You are not logged in");
        }
        let sp_id=null;
        const foundSP=await models.ServiceProvider.findById(user.id);
        const foundMod=await models.Moderator.findById(user.id);
        if (foundSP){
            console.log("SP uses");
            sp_id=user.id;
        }else if (foundMod){
            sp_id=foundMod.serviceProvider;
        }else{
            throw new Error("You didn't have previllage");
        }
        console.log(sp_id);
        return models.Worker.aggregate([
            {
                $match:{
                    serviceProvider:mongoose.Types.ObjectId(sp_id)
                }
            },
            {
                $sort:{
                    name:-1
                }
            }
        ]);
    }
}

