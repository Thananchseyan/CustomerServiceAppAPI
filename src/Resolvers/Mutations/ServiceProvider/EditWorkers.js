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

    }
}
