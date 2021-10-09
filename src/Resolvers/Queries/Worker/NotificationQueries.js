const mongoose=require('mongoose');
module.exports = {
    worker_getMyNotification:async (parent,args,{models,user})=>{
        const worker=await models.Worker.findById(user.id);
        if (!worker){
            throw new Error("You cannot query this");
        }
        try{
            return models.NotificationWorker.aggregate([
                {
                    $match:
                        {
                            worker:mongoose.Types.ObjectId(user.id)
                        }

                },
                {
                    $sort:
                        {
                            date:-1
                        }

                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error in fetching notification");
        }
    }
}
