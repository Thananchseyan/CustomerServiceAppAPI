const Query=require('./Query');
const Customer=require('./Customer');
const ServiceProvider=require('./ServiceProvider');
const Message=require('./MessageQueries');
const Admin=require('./Admin');
const Worker=require('./Worker');
const Moderator=require('./Moderator');
module.exports={
    ...Query,
    ...Customer,
    ...ServiceProvider,
    ...Message,
    ...Admin,
    ...Worker,
    ...Moderator
}
