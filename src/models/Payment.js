const mongoose=require('mongoose');
const PaymentSchema=new mongoose.Schema(
    {
        from:{
            type:String,
            required:true
        },
        to:{
            type:String,
            required:true
        },
        appointment:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Appointment',
            required:true
        },
        amount:{
            type:Number,
            required:true
        },
        payedOn:{
            type:Date,
            required:true
        }
    }
);
const Payment=mongoose.model('Payment',PaymentSchema);
module.exports = Payment;