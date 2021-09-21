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
                    $match: {
                        $and: [
                            {
                                workingRange: districtName
                            },
                            {
                                state:"approved"
                            }
                        ]
                    }
                }
            ]
        );
    },
    defaultSorting: async (parent,{args},{models})=>{
        return models.ServiceProvider.aggregate(
            [
                {
                    $lookup:{
                        from: 'memberships',
                        localField: 'membership',
                        foreignField: '_id',
                        as: 'member'
                    }
                },
                {
                    $unwind:{
                        path: "$member"
                    }
                },
                {
                    $sort:{
                        "member.membership_value": -1
                    }
                }
            ]
        );
    },
    sortingByRating: async (parent,{args},{models})=>{
        return models.ServiceProvider.aggregate(
            [
                {
                    $sort:{
                        rating: -1
                    }
                }
            ]
        );
    }
}