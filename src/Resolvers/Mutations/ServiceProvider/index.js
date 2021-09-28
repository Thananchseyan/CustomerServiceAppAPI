const EditWorkers=require('./EditWorkers');
const Booking=require('./Booking');
const Appointment=require('./Appointment');
const Notification=require('./Notification');
module.exports = {
    ...EditWorkers,
    ...Booking,
    ...Appointment,
    ...Notification
}
