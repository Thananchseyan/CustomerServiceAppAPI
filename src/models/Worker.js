const mongoose=require('mongoose');
const WorkerSchema=new mongoose.Schema(
    {
        workerId:{
            type:String,
            unique:true,
            required:true
        },
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
        contact_no:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            default:0
        }
    }
);
const Worker=mongoose.model('Worker',WorkerSchema);
module.exports = Worker;

