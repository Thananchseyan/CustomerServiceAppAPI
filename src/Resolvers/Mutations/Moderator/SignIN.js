const {AuthenticationError}=require('apollo-server-express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports={
    signINModerator: async (parent,{username,password},{models})=>{
        const moderator=await models.Moderator.findOne({
            username:username
        });
        //console.log(moderator.left_date);
        if(!moderator){
            throw new AuthenticationError('Error Sign In in');
        }else if (moderator.left_date!=null){
            throw new Error("You left the company");
        }
        const valid=await bcrypt.compare(password,moderator.password);
        if (!valid){
            throw new AuthenticationError("Error Signin in ");
        }
        return jwt.sign({id:moderator._id},process.env.JWT_SECRET);
    }

}
