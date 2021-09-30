const mongoose=require('mongoose');
const ModeratorSchema=new mongoose.Schema(
    {
        serviceProvider:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'ServiceProvider',
            required:true
        },
        username:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        contact_no:{
            type:String,
            required:true
        },
        no_of_vote:{
            type:Number,
            default:0,
            required:true
        },
        rating:{
            type:Number,
            default:0,
            required:true
        },
        profile:{
            type:String,
            required:true,
            default:"moderator.jpeg"
        },
        left_date:{
            type:Date,
            default:null
        }
    }
);
const Moderator=mongoose.model('Moderator',ModeratorSchema);
module.exports = Moderator;

