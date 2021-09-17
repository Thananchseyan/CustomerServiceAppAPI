const mongoose=require('mongoose');
const NotificationCustomerSchema=new mongoose.Schema(
    {
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Customer',
            required:true
        },
        appointment:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Appointment',
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
const NotificationCustomer=mongoose.model('NotificationCustomer',NotificationCustomerSchema);
module.exports = NotificationCustomer;
