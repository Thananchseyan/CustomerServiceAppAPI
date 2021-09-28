module.exports={
    appointment:async (parent,{booking,appointment_id,starting_date,duration,worker},{models})=>{
        try{
            return models.Appointment.create({
                booking: booking,
                appointment_id: appointment_id,
                starting_date: starting_date,
                duration: duration,
                worker: worker
            });
        }catch (err){
            throw new Error("Error in making Appointment");
        }
    },
    initiateAppointment:async (parent,{appointment_id},{models})=>{
        try{
            models.Appointment.updateOne({appointment_id:appointment_id},{$set:{state:"going"}},function (err,docs){
                if (err){
                    console.log(err);
                }
                else{
                    console.log(docs);
                }

            });
            return true;
        }catch (err){
            console.log(err);
            throw new Error("Initiate Failed");
        }
    },
    finishAppointment:async (parent,{appointment_id},{models})=>{
        try{
            models.Appointment.updateOne({appointment_id:appointment_id},{$set:{state:"finished"}},function (err,docs){
                if (err){
                    console.log(err);
                }
                else{
                    console.log(docs);
                }

            });
            return true;
        }catch (err){
            console.log(err);
            throw new Error("Failed to Finish");
        }
    }
}
