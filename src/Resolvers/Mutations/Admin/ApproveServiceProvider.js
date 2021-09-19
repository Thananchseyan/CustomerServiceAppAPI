module.exports = {
    approveServiceProvider: async (parents,{username},{models})=>{
        try{
            models.ServiceProvider.updateOne({username:username},{state:"approved"},function (err,docs){
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
            throw new Error("Approval failed");
        }
    }
}