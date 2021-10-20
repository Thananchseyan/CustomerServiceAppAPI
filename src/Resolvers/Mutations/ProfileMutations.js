const mongoose=require('mongoose');
const bcrypt = require("bcrypt");
module.exports={
    /*setPassword:async (parent,{password},{models,user})=>{
        const hashed=await bcrypt.hash(password,10);
        const provider = await models.ServiceProvider.findById(user.id);
        const moderator = await models.Moderator.findById(user.id);
        const customer = await models.Customer.findById(user.id);
        const worker = await models.Worker.findById(user.id);
        if (provider){
            try{
                const change=models.ServiceProvider.aggregate([
                    {
                        $match:
                            {
                                _id:mongoose.Types.ObjectId(user.id)
                            }
                    },
                    {
                        $set:
                            {
                                password:hashed
                            }
                    }
                ]);
                if (change){
                    return true;
                }else{
                    return false;
                }
            }catch (err){
                console.log(err);
                throw new Error("Error occurred in password change")
            }
        }else if (moderator){
            try{
                const change=models.Moderator.aggregate([
                    {
                        $match:
                            {
                                _id:mongoose.Types.ObjectId(user.id)
                            }
                    },
                    {
                        $set:
                            {
                                password:hashed
                            }
                    }
                ]);
                if (change){
                    return true;
                }else{
                    return false;
                }
            }catch (err){
                console.log(err);
                throw new Error("Error occurred in password change")
            }
        }else if (customer){
            try{
                const change=models.Customer.aggregate([
                    {
                        $match:
                            {
                                _id:mongoose.Types.ObjectId(user.id)
                            }
                    },
                    {
                        $set:
                            {
                                password:hashed
                            }
                    }
                ]);
                if (change){
                    return true;
                }else{
                    return false;
                }
            }catch (err){
                console.log(err);
                throw new Error("Error occurred in password change")
            }
        }else if (worker){
            try{
                console.log("pw change for worker");
                const change=models.Worker.aggregate([
                    {
                        $match:
                            {
                                _id:mongoose.Types.ObjectId(user.id)
                            }
                    },
                    {
                        $set:
                            {
                                password:hashed
                            }
                    }
                ]);
                if (change){
                    return change;
                }else{
                    return false;
                }
            }catch (err){
                console.log(err);
                throw new Error("Error occurred in password change")
            };
        }else{
            throw new Error("Log-in failed");
        }
    }*/
}
