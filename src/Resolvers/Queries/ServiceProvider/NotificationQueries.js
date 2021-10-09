const mongoose=require('mongoose');
module.exports ={
    getMyNotification:async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        let sp_id=null;
        if (provider){
            sp_id=user.id;
        }else if (moderator){
            sp_id=moderator.serviceProvider;
        }else{
            throw new Error("You cannot Query this");
        }
        try{
            return models.NotificationSP.aggregate([
                {
                    $match:
                        {
                            serviceProvider:mongoose.Types.ObjectId(sp_id)
                        }
                },
                {
                    $sort:
                        {
                            date: -1
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error in fetching notification");
        }

    }
}
