const customerAppointmentQueriesTest=require('../../../Resolvers/Queries/Customer/Appointment');
describe("Given queries are about customer queries which are related to works",()=>{
    describe("when customer query to his ongoing works",()=>{
        it("should aggregate appointment models",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerAppointmentQueriesTest.customer_getMyOngoingWorks({},{},{models,user})).rejects.toThrow("You didn't signin");
        })
    })
    describe("when customer query to his finished works",()=>{
        it("should aggregate appointment models",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerAppointmentQueriesTest.customer_getMyFinishedWorks({},{},{models,user})).rejects.toThrow("You didn't signin");
        })
    })
    describe("when customer query to his past works",()=>{
        it("should aggregate appointment models",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerAppointmentQueriesTest.customer_getMyWorks({},{},{models,user})).rejects.toThrow("You didn't signin");
        })
    })
    describe("when customer query to get amount for specific appointment",()=>{
        it("should aggregate appointment models",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerAppointmentQueriesTest.getAppointmentAmount({},{},{models,user})).rejects.toThrow("You have to sign in");
        })
    })
    describe("when customer query to get list of unpaid works",()=>{
        it("should aggregate appointment models",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                Appointment:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerAppointmentQueriesTest.customer_getMyUnpaidWorks({},{},{models,user})).rejects.toThrow("You have to sign in");
        })
    })

})
