const {AuthenticationError}=require('apollo-server-express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports={
    signINModerator: async (parent,{username,password},{models})=>{
        const moderator=await models.Moderator.findOne({
            username:username
        });
        if(!moderator){
            throw new AuthenticationError('Error Sign In in');
        }
        const valid=await bcrypt.compare(password,moderator.password);
        if (!valid){
            throw new AuthenticationError("Error Signin in ");
        }
        return jwt.sign({id:moderator._id},process.env.JWT_SECRET);
    }

}