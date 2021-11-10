const workerMutations=require('../../../Resolvers/Mutations/Worker/SignIN');
describe("Given mutations are for worker",()=>{
    describe("When worker sign in ",()=>{
        it("should find in worker model",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    findOne:mock
                }
            }
            const user={}
            expect(workerMutations.signINWorker({},{},{models,user})).rejects.toThrow("Error Sign In in");
        })
    })
})
