const ratingMutations=require('../../../Resolvers/Mutations/ServiceProvider/Rating');
describe("Given mutations are for rating of sp",()=>{
    describe("When SP send review to customer",()=>{
        it("should update customer model",function (){
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
                Customer:{
                    updateOne:mock
                }
            }
            const user={}
            expect(ratingMutations.sendRatingToCustomer({},{},{models,user})).rejects.toThrow("U didn't have privilege");
        })
    })
})
