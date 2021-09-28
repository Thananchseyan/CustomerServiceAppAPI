module.exports={
    showMyMessages: async (parent,{username},{models})=>{
        return models.Message.aggregate(
            [
                {
                    $match: {
                        $or: [
                            {by: username}, {from: username}
                        ]
                    }
                },
                {
                    $sort:{
                    received_date: -1
                    }
                }
            ]);
    }
}
