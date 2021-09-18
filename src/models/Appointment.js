const mongoose=require('mongoose');
const AppointmentSchema=new mongoose.Schema(
    {
        booking:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Booking',
            required:true
        },
        appointment_id:{
            type:String,
            required:true,
            unique:true
        },
        starting_date:{
            type:Date,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        worker:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Worker'
            }
        ],
        state:{
            type:String,
            enum:['going','finished','open'],
            default:'open'
        }

    }
);
const Appointment=mongoose.model('Appointment',AppointmentSchema);
module.exports = Appointment;
