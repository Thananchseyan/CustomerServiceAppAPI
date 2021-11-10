const bookingMutations=require('../../../Resolvers/Mutations/ServiceProvider/Booking');
describe("Given mutations are for maintenance of booking by worker",()=>{
    describe("When SP confirm the booking of customer",()=>{
        it("should update booking model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Booking:{
                    updateOne:mock
                }
            }
            const user={}
            expect(bookingMutations.confirmBooking({},{},{models,user})).rejects.toThrow("You didn't have a previlage");
        })
    })
    describe("When SP cancel the booking of customer",()=>{
        it("should update booking model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Booking:{
                    updateOne:mock
                }
            }
            const user={}
            expect(bookingMutations.cancelBooking({},{},{models,user})).rejects.toThrow("You didn't have a previlage");
        })
    })
})
