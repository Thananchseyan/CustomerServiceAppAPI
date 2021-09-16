const mongoose=require('mongoose');
const ServiceSchema=new mongoose.Schema(
    {
        service_name:{
            type:String,
            required:true,
            lowercase:true,
            unique:true
        },
        description:{
            type:String
        },
        icon:{
            type:String,
            required:true,
            unique:true
        }

    }
);
const Service=mongoose.model('Service',ServiceSchema);
module.exports=Service;