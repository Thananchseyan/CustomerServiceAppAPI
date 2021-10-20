module.exports= {
    getMyRole: async (parent, args, {models, user}) => {
        const provider = await models.ServiceProvider.findById(user.id);
        const moderator = await models.Moderator.findById(user.id);
        const customer = await models.Customer.findById(user.id);
        const worker = await models.Worker.findById(user.id);
        if (provider){
            return "ServiceProvider";
        }else if (moderator){
            return "Moderator";
        }else if (customer){
            return "Customer";
        }else if (worker){
            return "Worker";
        }else{
            throw new Error("Log-in failed");
        }
    }
}
