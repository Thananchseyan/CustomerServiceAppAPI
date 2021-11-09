const customerNotificationQueriesTest=require('../../../Resolvers/Queries/Customer/NotificationQueries');
describe("Given queries are about notifications of customer",()=>{
    describe("when customer wants to get his notifications",()=>{
        it("should aggregate NotificationCustomer models",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                NotificationCustomer:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerNotificationQueriesTest.customer_getMyNotification({},{},{models,user})).rejects.toThrow("You cannot Query this");
        })
    })
})
