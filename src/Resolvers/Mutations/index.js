const Admin=require('./Admin');
const Mutation=require('./mutation');
const ServiceProvider=require('./ServiceProvider');
module.exports={
    ...Admin,
    ...Mutation,
    ...ServiceProvider
}
