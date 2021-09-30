module.exports={
    getMyMessages: async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        const worker=await models.Worker.findById(user.id);
        const customer=await models.Customer.findById(user.id);
        let user_name=null;
        if (provider){
            user_name=provider.username;
        }else if (moderator){
            user_name=moderator.username;
        }else if (worker){
            user_name=worker.username;
        }else if (customer){
            user_name=customer.username;
        }else{
            throw new Error("You have to signin");
        }
        return models.Message.aggregate([
            {
                $match:{
                    to:user_name
                }
            },
            {
                $sort:{
                    received_date:-1
                }
            }
        ]);
    }
}
