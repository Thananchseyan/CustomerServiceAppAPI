const Province=require('./Province');
const District=require('./District');
const SystemAdmin=require('./SystemAdmin');
const Booking=require('./Booking');
const Customer=require('./Customer');
const CustomerAccount=require('./CustomerAccount');
const CustomerReview=require('./CustomerReview');
const Images=require('./Images');
const Manager=require('./Manager');
const Membership=require('./Membership');
const Moderator=require('./Moderator');
const Owner=require('./Owner');
const Service=require('./Service');
const ServiceProvider=require('./ServiceProvider');
const Worker=require('./Worker');
const WorkingRange=require('./WorkingRange');
const WorkStation=require('./WorkStation');
const NotificationSP=require('./NotificationSP');
const Appointment=require('./Appointment');
const Payment=require('./Payment');

const models={
    Province,
    District,
    SystemAdmin,
    Booking,
    Customer,
    CustomerAccount,
    CustomerReview,
    Images,
    Manager,
    Membership,
    Moderator,
    Owner,
    Service,
    ServiceProvider,
    Worker,
    WorkingRange,
    WorkStation,
    NotificationSP,
    Appointment,
    Payment

};
module.exports=models;
