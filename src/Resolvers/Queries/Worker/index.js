const AppointmentQueries=require('./Appointment');
const PersonalQueries=require('./PersonalQueries');
const NotificationQueries=require('./NotificationQueries');
const DashboardQueries=require('./DashboardQueries');
module.exports={
    ...AppointmentQueries,
    ...PersonalQueries,
    ...NotificationQueries,
    ...DashboardQueries
}
