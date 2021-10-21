const {AuthenticationError} = require('apollo-server-express');
const mongoose=require('mongoose');
module.exports={
    showWorkers: async (parent,args,{models})=>{
        return models.Worker.aggregate([
            {
                $sort:{
                    name:1
                }
            }
        ])
    },
    getMyWorkers: async (parent,{offset,page},{models,user})=>{
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
        if (page===1){
            return models.Worker.aggregate([
                {
                    $match:{
                        serviceProvider:mongoose.Types.ObjectId(sp_id)
                    }
                },
                {
                    $sort:{
                        name:1
                    }
                },
                {
                    $limit:offset
                }
            ]);
        }else if (page>1) {
            return models.Worker.aggregate([
                {
                    $match:{
                        serviceProvider:mongoose.Types.ObjectId(sp_id)
                    }
                },
                {
                    $sort:{
                        name:1
                    }
                },
                {
                    $skip:offset*(page-1)

                },
                {
                    $limit:offset
                }
            ]);
        }else{
            throw new Error("Page 1 is minimum");
        }
    }
}

