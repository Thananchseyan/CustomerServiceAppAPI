const spBookingQueries=require('../../../Resolvers/Queries/ServiceProvider/BookingQueries');
describe("Given queries are for Booking of the SP",()=>{
    describe("when SP call to get their bookings", () => {
        it("should aggregate Appointment models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Booking: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spBookingQueries.getMyBooking({}, {}, {models, user})).rejects.toThrow("You didn't have previlage");
        })
    })
})
