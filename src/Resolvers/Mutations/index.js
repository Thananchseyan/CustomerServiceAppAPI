const Admin=require('./Admin');
const Mutation=require('./mutation');
const ServiceProvider=require('./ServiceProvider');
const Moderator=require('./Moderator');
const Message=require('./MessageMutations');
const Customer=require('./Customer');
const Image=require('./Image');
const Worker=require('./Worker');
module.exports={
    ...Admin,
    ...Mutation,
    ...ServiceProvider,
    ...Moderator,
    ...Message,
    ...Customer,
    ...Image,
    ...Worker
}
