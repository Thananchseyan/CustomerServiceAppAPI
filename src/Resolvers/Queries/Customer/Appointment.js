const mongoose=require('mongoose');
module.exports={
    customer_getMyOngoingWorks:async (parent,args,{models,user})=>{
        const customer=await models.Customer.findById(user.id);
        if (!customer){
            throw new Error("You didn't signin");
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
                                {
                                    "Booking.by":mongoose.Types.ObjectId(user.id)
                                },
                                {
                                    state:"going"
                                }]
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error while fetching");
        }
    },
    customer_getMyFinishedWorks:async (parent,args,{models,user})=>{
        const customer=await models.Customer.findById(user.id);
        if (!customer){
            throw new Error("You didn't signin");
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
                                    {
                                        "Booking.by":mongoose.Types.ObjectId(user.id)
                                    },
                                    {
                                        state:"finished"
                                    }]
                        }
                },
                {
                    $sort:
                        {
                            "Booking.date": -1
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error while fetching");
        }
    },
    customer_getMyWorks:async (parent,args,{models,user})=>{
        const customer=await models.Customer.findById(user.id);
        if (!customer){
            throw new Error("You didn't signin");
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
                            "Booking.by":mongoose.Types.ObjectId(user.id)
                        }
                },
                {
                    $sort:
                        {
                            "Booking.date": -1
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error while fetching");
        }
    }
}
