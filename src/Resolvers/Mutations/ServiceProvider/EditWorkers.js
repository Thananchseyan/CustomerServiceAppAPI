const {AuthenticationError} = require('apollo-server-express');
const bcrypt = require('bcrypt');
const mongoose=require('mongoose');

module.exports={
    addModerator: async (parent,{username,password,name,email,contact_no},{models,ServiceProvider})=>{
    //addModerator: async (parent,{serviceProvider,username,password,name,email,contact_no},{models})=>{
        if (!ServiceProvider) {
            throw new AuthenticationError('You must to be Service Provider');
        }

        const hashed=await bcrypt.hash(password,10);
        try{
            return await models.Moderator.create({
                serviceProvider:mongoose.Types.ObjectId(ServiceProvider.id),
                //serviceProvider:serviceProvider,
                username:username,
                password:hashed,
                name:name,
                contact_no:contact_no,
                email:email,
            });
        }catch (err){
            console.log(err);
            throw new Error('Error in addition of moderator');
        }
    }
}
