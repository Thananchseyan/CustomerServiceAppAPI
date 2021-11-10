const customerRatingMutations=require('../../../Resolvers/Mutations/Customer/Rating');
describe("Given mutations are for rating of worker",()=>{
    describe("When customer send review to worker",()=>{
        it("should update worker model",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                Worker:{
                    updateOne:mock
                }
            }
            const user={}
            expect(customerRatingMutations.sendRatingToWorker({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
