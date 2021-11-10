const appointmentMutations=require('../../../Resolvers/Mutations/ServiceProvider/Appointment');
describe("Given mutations are for appointment of SP",()=>{
    describe("When SP conform booking of customer",()=>{
        it("should create in Appointment model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Appointment:{
                    create:mock
                }
            }
            const user={}
            expect(appointmentMutations.appointment({},{},{models,user})).rejects.toThrow("You didn't have a previlage");
        })
    })
    describe("When SP initiate appointment of customer",()=>{
        it("should update in Appointment model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Worker:{
                    findById:mock
                },
                Appointment:{
                    updateOne:mock
                }
            }
            const user={}
            expect(appointmentMutations.initiateAppointment({},{},{models,user})).rejects.toThrow("You didn't have a previlage");
        })
    })
    describe("When SP finish appointment of customer",()=>{
        it("should update in Appointment model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Worker:{
                    findById:mock
                },
                Appointment:{
                    updateOne:mock
                }
            }
            const user={}
            expect(appointmentMutations.finishAppointment({},{},{models,user})).rejects.toThrow("You didn't have a previlage");
        })
    })
    describe("When SP edit workers in appointment of customer",()=>{
        it("should update in Appointment model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Appointment:{
                    updateOne:mock
                }
            }
            const user={}
            expect(appointmentMutations.assignWorker({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
})
