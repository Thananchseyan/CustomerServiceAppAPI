const Sort=require('./Sorting');
const ServiceSelection=require('./ServiceSelection');
const PersonalQueries=require('./PersonalQueries');
const NotificationQueries=require('./NotificationQueries');
module.exports={
    ...Sort,
    ...ServiceSelection,
    ...PersonalQueries,
    ...NotificationQueries
}
