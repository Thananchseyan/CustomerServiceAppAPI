const workerCountQueriesTest=require('../../../Resolvers/Queries/Worker/CountQueries');
describe("given queries are for workers' count",()=>{
    describe("when get count assigned works called",()=>{
        it("should aggregate appointment models",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(workerCountQueriesTest.getCountAssignedAppointments({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
