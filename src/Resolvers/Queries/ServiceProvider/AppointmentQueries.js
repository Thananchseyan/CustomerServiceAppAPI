const mongoose=require('mongoose');
module.exports={
    getMyOngoingWorks: async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        let sp_id=null;
        if (provider){
            sp_id=user.id;
        }else if (moderator){
            sp_id=user.id;
        }else{
            throw new Error("You didn't have privilage");
        }
        try{
            return models.Appointment.aggregate([
                {
                    $lookup:
                        {
                            from: 'bookings',
                            localField: 'booking',
                            foreignField: '_id',
                            as: 'Booking'
                        }
                },
                {
                    $unwind:
                        {
                            path: "$Booking"
                        }
                },
                {
                    $match:
                        {
                            $and:
                                [
                                    {state:"going"},
                                    {"Booking.to":mongoose.Types.ObjectId(sp_id)}
                                ]
                        }
                }

            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error occured");
        }
    },

    getMyWorks:async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        let sp_id=null;
        if (provider){
            sp_id=user.id;
        }else if (moderator){
            sp_id=user.id;
        }else{
            throw new Error("You didn't have privilage");
        }
        try{
            return models.Appointment.aggregate([
                {
                    $lookup:
                        {
                            from: 'bookings',
                            localField: 'booking',
                            foreignField: '_id',
                            as: 'Booking'
                        }
                },
                {
                    $unwind:
                        {
                            path: "$Booking"
                        }
                },
                {
                    $match:
                        {
                            "Booking.to":mongoose.Types.ObjectId(sp_id)
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error occured");
        }
    },
    getMyFinishedWorks:async (parent,args,{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        let sp_id=null;
        if (provider){
            sp_id=user.id;
        }else if (moderator){
            sp_id=user.id;
        }else{
            throw new Error("You didn't have privilage");
        }
        try{
            return models.Appointment.aggregate([
                {
                    $lookup:
                        {
                            from: 'bookings',
                            localField: 'booking',
                            foreignField: '_id',
                            as: 'Booking'
                        }
                },
                {
                    $unwind:
                        {
                            path: "$Booking"
                        }
                },
                {
                    $match:
                        {
                            $and:
                                [
                                    {state:"finished"},
                                    {"Booking.to":mongoose.Types.ObjectId(sp_id)}
                                ]
                        }
                }

            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error occured");
        }
    }
}
