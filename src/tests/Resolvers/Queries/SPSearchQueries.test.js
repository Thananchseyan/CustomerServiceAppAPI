const searchQueries=require('../../../Resolvers/Queries/ServiceProvider/SearchQueries');
describe("Given queries are for search of SP",()=>{
    describe("When get moderator called",()=>{
        it("should aggregate moderator model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    aggregate:mock
                }
            }
            const user={}
            expect(searchQueries.getModerator({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("When get Worker called",()=>{
        it("should aggregate worker model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Worker:{
                    aggregate:mock
                }
            }
            const user={}
            expect(searchQueries.getWorker({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("When search Booking called",()=>{
        it("should aggregate Booking model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Booking:{
                    aggregate:mock
                }
            }
            const user={}
            expect(searchQueries.searchBooking({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("When search fnish works called",()=>{
        it("should aggregate Appointment model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(searchQueries.searchFinishAppointment({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("When search Open appointment called",()=>{
        it("should aggregate Appointment model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(searchQueries.searchOpenAppointment({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
