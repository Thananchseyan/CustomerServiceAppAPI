const mongoose=require('mongoose');
const ModeratorSchema=new mongoose.Schema(
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
const Moderator=mongoose.model('Moderator',ModeratorSchema);
module.exports=Moderator;