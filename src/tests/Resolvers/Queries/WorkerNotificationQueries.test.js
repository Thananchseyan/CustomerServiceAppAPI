const workerNotificationQueriesTest=require('../../../Resolvers/Queries/Worker/NotificationQueries');
describe("Given queries are for notifications of worker",()=>{
    describe("when get my notification called",()=>{
        it("should aggregate notifiacation worker model",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    findById:mock
                },
                NotificationWorker:{
                    aggregate:mock
                }
            }
            const user={}
            expect(workerNotificationQueriesTest.worker_getMyNotification({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
