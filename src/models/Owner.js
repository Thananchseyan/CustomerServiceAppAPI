const mongoose=require('mongoose');
const OwnerSchema=new mongoose.Schema(
    {
        owner_name:{
            type:String,
            required:true
        },
        owner_NIC:{
            type:String,
            required:true,
            unique:true
        },
        contact_no:{
            type:String,
            required:true
        },
        profile:{
            type:String,
            required:true
        }
    }
);
const Owner=mongoose.model('Owner',OwnerSchema);
module.exports = Owner;