//const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {AuthenticationError}=require('apollo-server-express');
require('dotenv').config();
module.exports={

    signUPSP: async (parent,{username,password,name,address,contact_no,email,bank_acc_no,owner,service,membership,workingRange,joined_at},{models})=>{
        const hashed=await bcrypt.hash(password,10);
        try{
            return await models.ServiceProvider.create({
                username:username,
                password:hashed,
                name:name,
                address:address,
                contact_no:contact_no,
                email:email,
                bank_acc_no:bank_acc_no,
                owner:owner,
                service:service,
                membership:membership,
                workingRange:workingRange,
                joined_at:joined_at
            });
        }catch (err){
            console.log(err);
            throw new Error('Error in Registration');
        }
    },

    signINSP: async (parent,{username,password},{models})=>{
        const provider=await models.ServiceProvider.findOne({
            username:username
        });
        if(!provider){
            throw new AuthenticationError('Error Signin in');
        }
        const valid=await bcrypt.compare(password,provider.password);
        if (!valid){
            throw new AuthenticationError("Error Signin in ");
        }
        return jwt.sign({id:provider._id},process.env.JWT_SECRET);
    },

    signUPCustomer: async (parent,{username,password,name,contact_no,email,joined},{models})=>{
        const hashed=await bcrypt.hash(password,10);
        try{
            return await models.Customer.create({
                username,
                password:hashed,
                name,
                contact_no,
                email,
                joined
            });
        }catch (err){
            console.log(err);
            throw new Error('Error Creating Account')
        }
    },
    signINCustomer: async(parent,{username,password},{models})=>{
        const customer=await models.Customer.findOne({
            username:username
        });
        if(!customer){
            throw new AuthenticationError('Error Signin in');
        }
        const valid=await bcrypt.compare(password,customer.password);
        if (!valid){
            throw new AuthenticationError("Error Signin in ");
        }
        return jwt.sign({id:customer._id},process.env.JWT_SECRET);
    },
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
    addOwner: async (parent,{owner_name,owner_NIC,contact_no},{models})=>{
        return await models.Owner.create({
            owner_name:owner_name,
            owner_NIC:owner_NIC,
            contact_no:contact_no
        })
    },
    addService: async (parent,{service_name,icon},{models})=>{
        return await models.Service.create({
            service_name:service_name,
            icon:icon,
        })
    },
    addMembership: async (parent,{membership_name,membership_period,membership_value},{models})=>{
        return await models.Membership.create({
            membership_name:membership_name,
            membership_period:membership_period,
            membership_value:membership_value
        })
    },
    addWorkingRange:async (parent,{name,range_type,district},{models})=>{
        return await models.WorkingRange.create({
            name:name,
            range_type:range_type,
            district:district
        })
    },
    addWorker:async (parent,{workerId,serviceProvider,username,password,name,contact_no},{models})=>{
        const hashed=await bcrypt.hash(password,10);
        try{
            return await models.Worker.create({
                workerId:workerId,
                serviceProvider:serviceProvider,
                username:username,
                password:hashed,
                name:name,
                contact_no:contact_no
            });
        }catch (err){
            console.log(err);
            throw new Error('Error in Addition');
        }
    }


};
