const notificationMutations=require('../../../Resolvers/Mutations/ServiceProvider/Notification');
describe("Given mutations are for notification of SP",()=>{
    describe("When SP send notification to customer",()=>{
        it("should create Notification customer model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Worker:{
                    findById:mock
                },
                NotificationCustomer:{
                    create:mock
                }
            }
            const user={}
            expect(notificationMutations.addToCustomerNotification({},{},{models,user})).rejects.toThrow("You didn't have a previlage");
        })
    })
    describe("When SP send notification to worker",()=>{
        it("should create Notification Worker model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                NotificationWorker:{
                    create:mock
                }
            }
            const user={}
            expect(notificationMutations.addToWorkerNotification({},{},{models,user})).rejects.toThrow("You didn't have a previlage");
        })
    })
    describe("When SP read notification",()=>{
        it("should update Notification SP model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                NotificationSP:{
                    updateOne:mock
                }
            }
            const user={}
            expect(notificationMutations.ServiceProviderReadNotification({},{},{models,user})).rejects.toThrow("You didn't have a previlage");
        })
    })
})
