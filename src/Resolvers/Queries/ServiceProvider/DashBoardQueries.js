const mongoose=require('mongoose');
module.exports={
    bookingFeed:async (parent,args,{models,user})=>{
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
            return models.Booking.aggregate([
                {
                    $project:
                        {
                            Date:{
                                $dateToString:{
                                    format: "%Y-%m-%d",
                                    date: "$date"
                                }
                            },
                            by:"$by",
                            to:"$to"
                        }
                },
                {
                    $match:
                        {
                            to:mongoose.Types.ObjectId(sp_id)
                        }
                },
                {
                    $group:
                        {
                            _id: "$Date",
                            Count: {
                                $sum: 1
                            }
                        }
                },
                {
                    $sort:
                        {
                            _id: -1
                        }
                },
                {
                    $limit:5
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error in fetching values");
        }
    },

    workStats: async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        let sp_id=null;
        if (provider){
            sp_id=user.id;
        }else if (moderator){
            sp_id=moderator.serviceProvider;
        }else{
            throw new Error("You cannot do this query");
        }
        try{
            return models.Booking.aggregate([
                {
                    $lookup:
                        {
                            from: 'appointments',
                            localField: '_id',
                            foreignField: 'booking',
                            as: 'confirmed'
                        }
                },
                {
                    $match:
                        {
                            to:mongoose.Types.ObjectId(sp_id)
                        }
                },
                {
                    $project:
                        {
                            state:"$state",
                            confirmed:"$confirmed"
                        }
                },
                {
                    $unwind:
                        {
                            path: "$confirmed",
                            preserveNullAndEmptyArrays: true
                        }
                },
                {
                    $project:
                        {
                            state:"$state",
                            confirmed:"$confirmed.state"
                        }
                },
                {
                    $project:
                        {
                            confirmed:{$ifNull:["$confirmed","$state"]}
                        }
                },
                {
                    $group:
                        {
                            _id: "$confirmed",
                            Count: {
                                $sum: 1
                            }
                        }
                },
                {
                    $sort:{
                        _id:-1
                    }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error in fetching info");
        }
    }

}
