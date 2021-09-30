const Admin=require('./Admin');
const Mutation=require('./mutation');
const ServiceProvider=require('./ServiceProvider');
const Message=require('./MessageMutations');
const Customer=require('./Customer');
const Image=require('./Image');
const Worker=require('./Worker');
module.exports={
    ...Admin,
    ...Mutation,
    ...ServiceProvider,
    ...Message,
    ...Customer,
    ...Image,
    ...Worker
}
