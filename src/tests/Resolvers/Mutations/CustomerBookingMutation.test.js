const customerBookingMutationTest=require('../../../Resolvers/Mutations/Customer/booking');
describe("Given mutations are for customers booking",()=>{
    describe("when booking made",()=>{
        it("should create in booking model",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                Booking:{
                    create:mock
                }
            }
            const user={}
            const data={}
            expect(customerBookingMutationTest.booking({},data,{models,user})).rejects.toThrow("You have to log in to our system to book");
        })
    })
    describe("when customer wants to store card info made",()=>{
        it("should create in Create model",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                CustomerAccount:{
                    create:mock
                }
            }
            const user={}
            const data={}
            expect(customerBookingMutationTest.saveCustomerAccountDetails({},data,{models,user})).rejects.toThrow("You have to log in to our system");
        })
    })
})
