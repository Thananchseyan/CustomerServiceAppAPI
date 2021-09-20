module.exports = {
    checkDistrictOnServiceProvider: async (parent,{districtName},{models})=>{
        return models.ServiceProvider.aggregate(
            [
                {
                    $unwind:{
                        path: "$workingRange"
                    }
                },
                {
                    $match:
                        {
                            workingRange:districtName
                        }
                }
            ]
        );
    }
}