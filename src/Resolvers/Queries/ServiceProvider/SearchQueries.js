const mongoose=require('mongoose');
module.exports={
    getModerator:async (parent,{username},{models,user})=>{
        const rename=new RegExp(username,"i");
        const provider=await models.ServiceProvider.findById(user.id);
        if (!provider){
            throw new Error("You cannot query this");
        }
        try{
            return models.Moderator.aggregate([
                {
                    $match:
                        {
                            $and:
                            [
                                {
                                    serviceProvider:mongoose.Types.ObjectId(user.id)
                                },
                                {
                                    username:
                                        {
                                            $regex:rename
                                        }
                                }
                            ]
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Search Failed");
        }
    },
    getWorker: async (parent,{username},{models,user})=>{
        const rename=new RegExp(username,"i");
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        let sp_id=null;
        if (provider){
            sp_id=user.id;
        }else if (moderator){
            sp_id=moderator.serviceProvider;
        }else{
            throw new Error("You cannot query this");
        }
        try{
            return models.Worker.aggregate([
                {
                    $match:
                        {
                            $and:
                                [
                                    {
                                        serviceProvider:mongoose.Types.ObjectId(sp_id)
                                    },
                                    {
                                        username:
                                            {
                                                $regex:rename
                                            }
                                    }
                                ]
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Search Failed");
        }
    }
}
