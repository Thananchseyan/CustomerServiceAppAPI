const registrationQueries=require('../../../Resolvers/Queries/ServiceProvider/RegistrationQueries');
describe("Given queries are for registration",()=>{
    describe("When get membership called",()=>{
        it("should find membership",function (){
            const mock=jest.fn()
            const models={
                Membership:{
                    findOne:mock
                }
            }
            registrationQueries.getMembership({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
})
