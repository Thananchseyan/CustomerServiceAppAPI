const Owner=require('./Owner');
const Manager=require('./Manager');
const Moderator=require('./Moderator');
const Membership=require('./Membership');
const Service=require('./Service');
const WorkingRange=require('./WorkingRange');
const Image=require('./Images');
const ServiceProvider=require('./ServiceProvider');
const Worker=require('./Worker');
const ServiceProviderDir={
    Owner,
    Manager,
    Moderator,
    Membership,
    Service,
    WorkingRange,
    Image,
    ServiceProvider,
    Worker
}
module.exports = ServiceProviderDir;
