const mongoose=require('mongoose');
const RangeSchema=new mongoose.Schema(
    {
        range_type:{
            type:String,
            required:true,
            lowercase:true,
            enum:['island','province','district']
        },
        districts:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'District'
            }
        ]

    }
);
const WorkingRange=mongoose.model('WorkingRange',RangeSchema);
module.exports = WorkingRange;