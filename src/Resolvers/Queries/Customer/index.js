const Sort=require('./Sorting');
const ServiceSelection=require('./ServiceSelection');
const PersonalQueries=require('./PersonalQueries');
const NotificationQueries=require('./NotificationQueries');
const AppointmentQueries=require('./Appointment');
const BookingQueries=require('./Booking');
module.exports={
    ...Sort,
    ...ServiceSelection,
    ...PersonalQueries,
    ...NotificationQueries,
    ...AppointmentQueries,
    ...BookingQueries
}
