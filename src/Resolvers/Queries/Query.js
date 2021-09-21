module.exports = {
    showProvinces: async (parent,args,{models})=>{
        return await models.Province.find();
    },
    showDistricts: async (parent,args,{models})=>{
        return await models.District.find();
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