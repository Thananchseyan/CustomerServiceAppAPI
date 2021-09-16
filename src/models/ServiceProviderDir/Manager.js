const mongoose=require('mongoose');
const ManagerSchema=new mongoose.Schema(
    {
        user_name:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        profile:{
            type:String,
            required:true
        }

    }
);
const Manager=mongoose.model('Manager',ManagerSchema);
module.exports=Manager;