const EditWorkers=require('./EditWorkers');
const Booking=require('./Booking');
const Appointment=require('./Appointment');
const Notification=require('./Notification');
const Rating=require('./Rating');
module.exports = {
    ...EditWorkers,
    ...Booking,
    ...Appointment,
    ...Notification,
    ...Rating
}
