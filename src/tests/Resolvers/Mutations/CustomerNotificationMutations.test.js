const customerNotificationMutationsTest=require('../../../Resolvers/Mutations/Customer/Notification');
describe("Given mutations are for notifications of worker",()=>{
    describe("When customer send notification to sp",()=>{
        it("should create notification sp",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                NotificationSP:{
                    create:mock
                }
            }
            const data={}
            const user={}
            expect(customerNotificationMutationsTest.addToServiceProviderNotification({},data,{models,user})).rejects.toThrow("You didn't have previlage to send notification to SP");
        })
    })
    describe("When customer read notification",()=>{
        it("should update notification customer",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                NotificationCustomer:{
                    updateOne:mock
                }
            }
            const data={}
            const user={}
            expect(customerNotificationMutationsTest.CustomerReadNotification({},data,{models,user})).rejects.toThrow("You didn't have previlage to read msg");
        })
    })
})
