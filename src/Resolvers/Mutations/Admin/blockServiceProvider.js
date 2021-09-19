module.exports = {
    blockServiceProvider: async (parent,{username},{models})=>{
        try{
            models.ServiceProvider.updateOne({username:username},{state:"blocked"},function (err,docs){
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
            throw new Error("block failed");
        }

    }
}