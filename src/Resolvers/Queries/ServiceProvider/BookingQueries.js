const mongoose=require('mongoose');
module.exports={
    getMyBooking:async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        let sp_id=null;
        if (provider){
            sp_id=user.id;
        }else if (moderator){
            sp_id=moderator.serviceProvider;
        }else{
            throw new Error("You didn't have previlage");
        }
        try{
            return models.Booking.aggregate([
                {
                    $match:{
                        $and:[
                            {
                                to:mongoose.Types.ObjectId(sp_id)
                            },
                            {
                                state:"open"
                            }
                        ]
                    }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Booking Failed");
        }
    }
}
