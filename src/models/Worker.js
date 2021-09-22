const mongoose=require('mongoose');
const WorkerSchema=new mongoose.Schema(
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
            default:"worker.jpeg"
        },
        left_date:{
            type:Date,
            default:null
        }
    }
);
const Worker=mongoose.model('Worker',WorkerSchema);
module.exports = Worker;

