const Admin=require('./Admin');
const Mutation=require('./mutation');
const ServiceProvider=require('./ServiceProvider');
const Moderator=require('./Moderator');
module.exports={
    ...Admin,
    ...Mutation,
    ...ServiceProvider,
    ...Moderator
}
