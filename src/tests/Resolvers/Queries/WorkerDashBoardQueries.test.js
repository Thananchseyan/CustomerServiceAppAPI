const workerDashBoardQueriesTest=require('../../../Resolvers/Queries/Worker/DashboardQueries');
describe("Given queries are for dashboard of worker",()=>{
    describe("when work stats called",()=>{
        it("should aggregate appointment model",function (){
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
            expect(workerDashBoardQueriesTest.worker_workStats({},{},{models,user})).rejects.toThrow("you cannot query this");
        })
    })
})
