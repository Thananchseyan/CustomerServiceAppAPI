module.exports = {
    owner: async (ServiceProvider,args,{models})=>{
        return models.Owner.findById(ServiceProvider.owner);
    },
    service: async (ServiceProvider,args,{models})=>{
        return models.Service.find({_id:{$in:ServiceProvider.service}});
    },
    membership: async (ServiceProvider,args,{models})=>{
        return models.Membership.findById(ServiceProvider.membership);
    }
}