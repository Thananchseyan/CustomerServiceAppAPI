const mongoose=require('mongoose');
const ImageSchema=new mongoose.Schema(
    {
        url:{
            type:String,
            required:true,
            unique:true
        },
        descripton:{
            type:String
        }
    }
);
const Image=mongoose.model('Image',ImageSchema);
module.exports=Image;