module.exports={
    getServiceProvidersByService: async (parent,{service},{models})=>{
        return models.ServiceProvider.aggregate(
            [
                {
                    $unwind:{
                        path: "$service"
                    }
                },
                {
                    $match:{
                        service:service
                    }
                }
            ]
        );
    }
}
