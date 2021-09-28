module.exports={
    addToServiceProviderNotification:async (parent,{serviceProvider,message},{models})=>{
        try{
            return models.NotificationSP.create({
                serviceProvider:serviceProvider,
                message:message
            });
        }catch (err){
            console.log(err);
            throw new Error("Sending notification to Service Provider is failed");
        }
    },
    CustomerReadNotification:async (parent,{id},{models})=>{
        try{
            models.NotificationCustomer.updateOne({_id:id},{$set:{state:"closed"}},function (err,docs){
                if (err){
                    console.log(err);
                }
                else{
                    console.log(docs);
                }

            });
            return true;
        }catch (err){
            console.log(err);
            throw new Error("notification didn't read");
        }
        //need to check cus..
    }
}
