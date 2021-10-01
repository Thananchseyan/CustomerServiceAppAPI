const Registration=require('./RegistrationQueries');
const WorkerQueries=require('./WorkerQueries');
const BookingQueries=require('./BookingQueries');
const AppointmentQueries=require('./AppointmentQueries');
module.exports={
    ...Registration,
    ...WorkerQueries,
    ...BookingQueries,
    ...AppointmentQueries
}
