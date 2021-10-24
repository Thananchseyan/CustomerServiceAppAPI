const AppointmentQueries=require('./Appointment');
const PersonalQueries=require('./PersonalQueries');
const NotificationQueries=require('./NotificationQueries');
const DashboardQueries=require('./DashboardQueries');
const SearchQueries=require('./SearchQueries');
module.exports={
    ...AppointmentQueries,
    ...PersonalQueries,
    ...NotificationQueries,
    ...DashboardQueries,
    ...SearchQueries
}
