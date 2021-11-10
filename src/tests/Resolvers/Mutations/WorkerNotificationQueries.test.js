const notificationMutations=require('../../../Resolvers/Mutations/Worker/Notification');
describe("Given mutations are for notification of worker",()=>{
    describe("When worker read notification",()=>{
        it("should update worker model",function (){
            const mock=jest.fn()
            const models={
                NotificationWorker:{
                    updateOne:mock
                },
                Worker:{
                    findById:mock
                }
            }
            const user={}
            expect(notificationMutations.WorkerReadNotification({},{},{models,user})).rejects.toThrow("You cannot read this msg");
        })
    })
})
