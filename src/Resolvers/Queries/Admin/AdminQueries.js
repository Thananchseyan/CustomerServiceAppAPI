module.exports = {
    showCustomers:async (parent,{args},{models})=>{
        return models.Customer.find();
    },
    admin_getOpenSP:async (parent,args,{models,user})=>{
        const admin=await models.SystemAdmin.findById(user.id);
        if (!admin){
            throw new Error("You cannot do this");
        }
        try{
            return models.ServiceProvider.aggregate([
                {
                    $match:
                        {
                            state:"registered"
                        }
                },
                {
                    $sort:
                        {
                            joined_at: 1
                        }
                }
            ]);
        }catch (err){
            console.log(err);
            throw new Error("Error while fetching data");
        }
    }
}
