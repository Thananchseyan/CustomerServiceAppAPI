const BookingMutations=require('./booking');
const ReviewMutations=require('./Review');
const PaymentMutations=require('./Payment');
const NotificationMutations=require('./Notification');
module.exports={
    ...BookingMutations,
    ...ReviewMutations,
    ...PaymentMutations,
    ...NotificationMutations
}
