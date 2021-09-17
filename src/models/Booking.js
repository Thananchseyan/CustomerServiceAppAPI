const mongoose=require('mongoose');
const BookingSchema=new mongoose.Schema(
    {
        by:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        to:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ServiceProvider',
            required: true
        },
        state:{
            type: String,
            enum: ['open', 'confirmed', 'cancelled', 'expired'],
            default: 'open',
            lowercase: true
        },
        workStation:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WorkStation',
            required: true
        },
        description:{
            type: String
        }

    });
const Booking=mongoose.model('Booking',BookingSchema);
module.exports = Booking;
