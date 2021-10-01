const mongoose=require('mongoose');
module.exports={
    worker_getMyAssignedWorks:async (parent,args,{models,user})=>{
        const worker=await models.Worker.findById(user.id);
        if (!worker){
            throw new Error("You have to be a worker");
        }
        try{
            return models.Appointment.aggregate([
                {
                    $unwind:
                        {
                            path: "$worker"
                        }
                },
                {
                    $match:
                        {
                            worker:mongoose.Types.ObjectId(user.id)
                        }
                },
                {
                    $sort:
                        {
                            starting_date: -1
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Action Failed");
        }
    }
}
