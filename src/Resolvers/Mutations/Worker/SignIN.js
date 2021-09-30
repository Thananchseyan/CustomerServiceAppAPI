const {AuthenticationError}=require('apollo-server-express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports={
    signINWorker: async (parent,{username,password},{models})=>{
        const worker=await models.Worker.findOne({
            username:username
        });
        if(!worker){
            throw new AuthenticationError('Error Sign In in');
        }
        const valid=await bcrypt.compare(password,worker.password);
        if (!valid){
            throw new AuthenticationError("Error Signin in ");
        }
        return jwt.sign({id:worker._id},process.env.JWT_SECRET);
    }

}
