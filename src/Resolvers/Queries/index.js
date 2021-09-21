const Query=require('./Query');
const Customer=require('./Customer');
const ServiceProvider=require('./ServiceProvider');

module.exports={
    ...Query,
    ...Customer,
    ...ServiceProvider
}
