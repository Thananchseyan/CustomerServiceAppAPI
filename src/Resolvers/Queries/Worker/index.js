const AppointmentQueries=require('./Appointment');
const PersonalQueries=require('./PersonalQueries');
const NotificationQueries=require('./NotificationQueries');
module.exports={
    ...AppointmentQueries,
    ...PersonalQueries,
    ...NotificationQueries
}
