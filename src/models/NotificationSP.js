const mongoose=require('mongoose');
const NotificationSPSchema=new mongoose.Schema(
    {
        serviceProvider:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'ServiceProvider',
            required:true
        },
        booking:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Booking',
            required:true
        },
        state:{
            type:String,
            enum:{
                values:['open','closed'],
                message:'Your state is not supported'
            },
            default:'open'
        }
    }
);
const NotificationSP=mongoose.model('NotificationSP',NotificationSPSchema);
module.exports = NotificationSP;
