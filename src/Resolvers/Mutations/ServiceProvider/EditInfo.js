module.exports = {
    pushService:async (parent,{service},{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        if (!provider && !moderator ){
            throw new Error("You cannot do this");
        }
        try{
            models.ServiceProvider.updateOne({_id:user.id},{$push:{service:service}},function(err,docs){
                if (err){
                    console.log(err);
                }else{
                    console.log(docs);
                }
            });
            return true;
        }catch (err){
            console.log(err);
            return false;
        }
    },
    pushDistrict:async (parent,{district},{models,user})=>{
        const provider=await models.ServiceProvider.findById(user.id);
        const moderator=await models.Moderator.findById(user.id);
        if (!provider && !moderator ){
            throw new Error("You cannot do this");
        }
        try{
            models.ServiceProvider.updateOne({_id:user.id},{$push:{workingRange:district}},function(err,docs){
                if (err){
                    console.log(err);
                }else{
                    console.log(docs);
                }
            });
            return true;
        }catch (err){
            console.log(err);
            return false;
        }
    },
}
