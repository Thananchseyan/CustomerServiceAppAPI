const workerQueries=require('../../../Resolvers/Queries/ServiceProvider/WorkerQueries');
describe("Given queries are for query about workers",()=>{
    describe("when show workers are called",()=>{
        it("should aggregate worker models",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    aggregate:mock
                }
            }
            workerQueries.showWorkers({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled()
            })
        })
    })
    describe("when get my workers are called",()=>{
        it("should aggregate worker models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Worker:{
                    aggregate:mock
                }
            }
            const user={}
            expect(workerQueries.getMyWorkers({},{},{models,user})).rejects.toThrow("You didn't have previllage");
        })
    })
    describe("when get my moderators are called",()=>{
        it("should aggregate moderator models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    aggregate:mock
                }
            }
            const user={}
            expect(workerQueries.getMyModerators({},{},{models,user})).rejects.toThrow("You aren't SP");
        })
    })
    describe("when get check username are called",()=>{
        it("should find in worker models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Worker:{
                    findOne:mock
                }
            }
            const user={}
            expect(workerQueries.SP_CheckWorkerUsernameAvailability({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
