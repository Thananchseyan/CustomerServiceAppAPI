const AppointmentQueries=require('./Appointment');
const PersonalQueries=require('./PersonalQueries');
module.exports={
    ...AppointmentQueries,
    ...PersonalQueries
}
