const customerBookingQueriesTest=require('../../../Resolvers/Queries/Customer/Booking');
describe("Given queries are about customers' booking",()=>{
    describe("when customer call to get his bookings",()=>{
        it("should aggregate booking models",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                Booking:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerBookingQueriesTest.customer_getMyBookings({},{},{models,user})).rejects.toThrow("You have to signin");
        })
    })
})
