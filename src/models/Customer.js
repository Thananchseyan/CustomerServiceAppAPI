const mongoose=require('mongoose');
const CustomerSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        profile: {
            type: String
        },
        name:{
            type:String,
            required:true
        },
        contact_no:{
            type:String,
            required:true,
            unique:true
        },
        joined:{
            type:Date,
            required:true
        },
        rating:{
            type:Number,
            default:0
        }
    }
);
const Customer=mongoose.model('Customer',CustomerSchema);
module.exports = Customer;