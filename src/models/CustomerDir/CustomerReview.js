const mongoose=require('mongoose');
const ReviewSchema=new mongoose.Schema(
    {
        by:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Customer',
            required:true
        },
        to:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'ServiceProvider',
            required:true
        },
        content:{
            type:String
        },
        rating:{
            type:Number,
            default:0
        },
        publish:{
            type:Boolean,
            required:true,
            default:true
        }
    }
);
const CustomerReview=mongoose.model('CustomerReview',ReviewSchema);
module.exports = CustomerReview;
