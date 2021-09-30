const {AuthenticationError} = require('apollo-server-express');
const bcrypt = require('bcrypt');
//const mongoose=require('mongoose');

module.exports={
    addModerator: async (parent,{username,password,name,email,contact_no},{models,user})=>{
        console.log(user.id);
        const foundSP=await models.ServiceProvider.findById(user.id);
        if (!user){
            throw new AuthenticationError("You are not logged in");
        }
        if(!foundSP){
            throw new AuthenticationError("You might be using a fake token");
        }
        const hashed=await bcrypt.hash(password,10);
        try{
            return models.Moderator.create({
                serviceProvider:user.id,
                username:username,
                password:hashed,
                name:name,
                email:email,
                contact_no:contact_no
            });
        }catch (err){
            throw new Error("Addition of Moderator Failed");
        }

    },

    addWorker:async (parent,{username,password,name,email,contact_no},{models,user})=>{
        const foundSP=await models.ServiceProvider.findById(user.id);
        const foundMod=await models.Moderator.findById(user.id);
        const hashed=await bcrypt.hash(password,10);
        if (!user){
            throw new AuthenticationError("You are not logged in");
        }
        if(foundSP){
            console.log("SP works");
            try{
                return models.Worker.create({
                    serviceProvider:user.id,
                    username:username,
                    password:hashed,
                    name:name,
                    email:email,
                    contact_no:contact_no
                });
            }catch (err){
                console.log(err);
                throw new Error("Addition of Worker is failed");
            }
        }else if (foundMod){
            console.log("Moderator Works");
            try{
                return models.Worker.create({
                    serviceProvider:foundMod.serviceProvider,
                    username:username,
                    password:hashed,
                    name:name,
                    email:email,
                    contact_no:contact_no
                });
            }catch (err){
                console.log(err);
                throw new Error("Addition of Worker is failed");
            }
        }else{
            throw new Error("You didn't have previlage");
        }


    }
}
