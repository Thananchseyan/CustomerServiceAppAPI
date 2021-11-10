const workerMutations=require('../../../Resolvers/Mutations/ServiceProvider/EditWorkers');
describe("Given mutations are for editing workers of SP",()=>{
    describe("When SP add moderator",()=>{
        it("should create in moderator model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    create:mock
                },
            }
            const user={}
            expect(workerMutations.addModerator({},{},{models,user})).rejects.toThrow("You might be using a fake token")
        })
    })
    describe("When SP add worker",()=>{
        it("should create in worker model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Worker:{
                    create:mock
                }
            }
            const user={}
            expect(workerMutations.addWorker({},{},{models,user})).rejects.toThrow("data and salt arguments required")
        })
    })
    describe("When SP remove worker",()=>{
        it("should update worker model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Worker:{
                    updateOne:mock
                }
            }
            const user={}
            expect(workerMutations.removeWorker({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
    describe("When SP remove moderator",()=>{
        it("should update moderator model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    updateOne:mock
                }
            }
            const user={}
            expect(workerMutations.removeModerator({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
})
