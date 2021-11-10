const workerAppointmentQueriesTest=require('../../../Resolvers/Queries/Worker/Appointment');
describe("Given queries are for appointment of worker",()=>{
    describe("When worker called getMyAssignedWorks",()=>{
        it("should aggregate appointment model",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(workerAppointmentQueriesTest.worker_getMyAssignedWorks({},{},{models,user})).rejects.toThrow("You have to be a worker");
        })
    })
    describe("When worker called getMyOngoingWorks",()=>{
        it("should aggregate appointment model",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(workerAppointmentQueriesTest.worker_getMyOngoingWorks({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("When worker called getMyFinishedWorks",()=>{
        it("should aggregate appointment model",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(workerAppointmentQueriesTest.worker_getMyFinishedWorks({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
