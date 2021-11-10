const workerSearchQueriesTest=require('../../../Resolvers/Queries/Worker/SearchQueries');
describe("Given queries are for search of worker",()=>{
    describe("when search ongoing works",()=>{
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
            expect(workerSearchQueriesTest.worker_SearchMyOngoingWorks({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when search Finished works",()=>{
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
            expect(workerSearchQueriesTest.worker_SearchMyFinishedWorks({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when search works",()=>{
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
            expect(workerSearchQueriesTest.worker_SearchMyWorks({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
