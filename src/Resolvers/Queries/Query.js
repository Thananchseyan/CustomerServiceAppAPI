module.exports = {
    showProvinces: async (parent,args,{models})=>{
        return await models.Province.find();
    },
    showDistricts:async (parent,args,{models})=>{
        return models.District.aggregate([
            {
                $sort:
                    {
                        districtName:1
                    }
            }
        ]);
    },
    showDistricts_pagination: async (parent, {offset,page},{models})=>{
        //return models.District.find().skip(offset * page).limit(offset);
        if (page===1){
            return models.District.aggregate([
                {
                    $sort:
                        {
                            districtName: 1
                        }
                },
                {
                    $limit:offset
                }
            ])
        }else{
            return models.District.aggregate([
                {
                    $sort:
                        {
                            districtName:1
                        }
                },
                {
                    $skip:offset*(page-1)

                },
                {
                    $limit:offset
                }
            ])
        };
    },

    showOwners: async (parent,args,{models})=>{
        return await models.Owner.find();
    },

    showServiceProviders: async (parent,args,{models})=>{
        return await models.ServiceProvider.find();
    },

    districtsByProvince: async (parent,{ProvinceName},{models})=> {
        console.log(ProvinceName);
        return models.District.aggregate([
            {
                $lookup:
                    {
                        from: "provinces",
                        localField: "province",
                        foreignField: "_id",
                        as: "provinceD",
                    }
            },

        ]);
    }


};
