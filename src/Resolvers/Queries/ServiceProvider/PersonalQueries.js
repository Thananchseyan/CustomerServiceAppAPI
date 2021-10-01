module.exports = {
    SP_me: async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        if (!provider){
            throw new Error("You cannot query this");
        }
        return provider;
    }
}
