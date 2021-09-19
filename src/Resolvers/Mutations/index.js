const Admin=require('./AdminMutations');
const Mutation=require('./mutation');
module.exports={
    ...Admin,
    ...Mutation
}
