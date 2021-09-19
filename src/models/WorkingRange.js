const mongoose=require('mongoose');
const RangeSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            lowercase:true,
            unique:true
        },

        range_type:{
            type:String,
            required:true,
            lowercase:true,
            enum:['island','province','district']
        },

        district:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'District'
            }
        ]

    }
);
const WorkingRange=mongoose.model('WorkingRange',RangeSchema);
module.exports = WorkingRange;