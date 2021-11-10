const notificationQueries=require('../../../Resolvers/Queries/ServiceProvider/NotificationQueries');
describe("Given queries are for notification related SP",()=>{
    describe("When get my notification called",()=>{
        it("should aggregate notification sp models",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                NotificationSP:{
                    aggregate:mock
                }
            }
            const user={}
            expect(notificationQueries.getMyNotification({},{},{models,user})).rejects.toThrow("You cannot Query this");
        })
    })
    describe("When get their worker notification query called",()=>{
        it("should aggregate notification Worker models",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                NotificationWorker:{
                    aggregate:mock
                }
            }
            const user={}
            expect(notificationQueries.getWorkerNotification({},{},{models,user})).rejects.toThrow("You cannot Query this");
        })
    })
})
