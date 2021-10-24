const mongoose=require('mongoose');
module.exports = {
    SP_me: async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        if (!provider){
            throw new Error("You cannot query this");
        }
        return provider;
    },
    getMyReviews: async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        let sp_id=null;
        if (provider){
            sp_id=user.id;
        }else if (moderator){
            sp_id=moderator.serviceProvider;
        }else{
            throw new Error("You cannot view reviews");
        }
        try{
            return models.CustomerReview.aggregate([
                {
                    $match:
                        {
                            to:mongoose.Types.ObjectId(sp_id)
                        }
                },
                {
                    $sort:
                        {
                            createdAt:-1
                        }
                }

            ]);
        }catch (err){
            console.log(err);
            throw new Error("Request failed");
        }
    },
    getMySP:async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        if (provider){
            return provider;
        }else if (moderator){
            return models.ServiceProvider.findById(moderator.serviceProvider);
        }else{
            throw new Error("YOu cannot do this");
        }
    }
}
