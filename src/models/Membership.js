const mongoose=require('mongoose');
const MembershipSchema=new mongoose.Schema(
    {
        membership_name:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            enum:['platinum','gold','silver','custom']
        },
        membership_period:{
            type:Number,
            required:true,
            unique:true,
        },
        membership_value:{
            type:Number,
            required:true,
            unique:true,
            enum:[100,50,25,10]

        },
        description:{
            type:String
        }
    }
);
const Membership=mongoose.model('Membership',MembershipSchema);
module.exports=Membership;