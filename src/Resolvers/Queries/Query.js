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

    showWorkingRange: async (parent,args,{models})=>{
        return await models.WorkingRange.find();
    },

    showServiceProviders: async (parent,args,{models})=>{
        return await models.ServiceProvider.find();
    },

    getWorkingRange: async (parent,{name},{models})=>{
        return models.WorkingRange.findOne({name:name});
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