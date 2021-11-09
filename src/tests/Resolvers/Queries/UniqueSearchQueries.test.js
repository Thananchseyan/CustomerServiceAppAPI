const uniqueSearchQueriesTest=require('../../../Resolvers/Queries/UniqueSearchQueries');
describe("given some queries are for unique object",()=>{
    describe("when unique search for appointment called",()=>{
        it("should find in Appointment model",function (){
            const mock=jest.fn();
            const models={
                Appointment:{
                    findById:mock
                }
            }
            uniqueSearchQueriesTest.UniqueSearchAppointment({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("when unique search for moderator called",()=>{
        it("should find in Moderator model",function (){
            const mock=jest.fn();
            const models={
                Moderator:{
                    findById:mock
                }
            }
            uniqueSearchQueriesTest.UniqueSearchModerator({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("when unique search for worker called",()=>{
        it("should find in Worker model",function (){
            const mock=jest.fn();
            const models={
                Worker:{
                    findById:mock
                }
            }
            uniqueSearchQueriesTest.UniqueSearchWorker({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("when unique search for Service Provider called",()=>{
        it("should find in ServiceProvider model",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    findById:mock
                }
            }
            uniqueSearchQueriesTest.UniqueSearchSP({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("when unique search for Customer Review called",()=>{
        it("should aggregate in CustomerReview model",function (){
            const mock=jest.fn();
            const models={
                CustomerReview:{
                    aggregate:mock
                },
                ServiceProvider: {
                    findById:mock
                },
                Moderator:{
                    findById:mock
                }
            }
            const user={}
            expect(uniqueSearchQueriesTest.UniqueGetCustomerReview({},{},{models,user})).rejects.toThrow("You cannot view reviews");
        })
    })
    describe("when unique search for Booking called",()=>{
        it("should aggregate in Booking model",function (){
            const mock=jest.fn();
            const models={
                Booking:{
                    aggregate:mock
                },
                ServiceProvider: {
                    findById:mock
                },
                Moderator:{
                    findById:mock
                }
            }
            const user={}
            expect(uniqueSearchQueriesTest.UniqueSearchBooking({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })

})
