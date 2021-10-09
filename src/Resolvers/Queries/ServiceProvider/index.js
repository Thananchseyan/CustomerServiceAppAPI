const Registration=require('./RegistrationQueries');
const WorkerQueries=require('./WorkerQueries');
const BookingQueries=require('./BookingQueries');
const AppointmentQueries=require('./AppointmentQueries');
const personalQueries=require('./PersonalQueries');
const NotificationQueries=require('./NotificationQueries');
module.exports={
    ...Registration,
    ...WorkerQueries,
    ...BookingQueries,
    ...AppointmentQueries,
    ...personalQueries,
    ...NotificationQueries
}
