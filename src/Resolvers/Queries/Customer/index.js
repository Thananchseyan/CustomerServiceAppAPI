const Sort=require('./Sorting');
const ServiceSelection=require('./ServiceSelection');
const PersonalQueries=require('./PersonalQueries');
module.exports={
    ...Sort,
    ...ServiceSelection,
    ...PersonalQueries
}
