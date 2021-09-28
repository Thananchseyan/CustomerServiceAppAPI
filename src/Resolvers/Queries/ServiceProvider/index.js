const Registration=require('./RegistrationQueries');
const WorkerQueries=require('./WorkerQueries');

module.exports={
    ...Registration,
    ...WorkerQueries
}
