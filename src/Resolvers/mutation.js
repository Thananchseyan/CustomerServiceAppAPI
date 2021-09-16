//const mongoose=require('mongoose');
//const bcrypt=require('bcrypt');
//const jwt=require('jsonwebtoken');
//const {AuthenticationError,ForbiddenError}=require('apollo-server-express');
require('dotenv').config();
module.exports={
    addProvince:async (parent,{provinceName},{models})=>{
        return await models.Province.create({
            provinceName:provinceName
        })
    },
    addDistrict:async (parent,{province,districtName},{models})=>{
        return await models.District.create({
            province:province,
            districtName:districtName

        })
    },
    addOwner: async (parent,{name,nic,no},{models})=>{
        return await models.ServiceProvider.Owner.create({
            owner_name:name,
            owner_NIC:nic,
            contact_no:no
        })
    }
};
