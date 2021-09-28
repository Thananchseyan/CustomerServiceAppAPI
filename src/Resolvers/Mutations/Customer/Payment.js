module.exports={
    payment:async (parent,{from,to,appointment,amount},{models})=>{
        try{
            return models.Payment.create({
                from:from,
                to:to,
                appointment:appointment,
                amount:amount
                }
            );
        }catch (err){
            console.log(err);
            throw new Error("Payment Registered Failed")
        }
    }
}
