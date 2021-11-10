const adminBlockMutationTest=require('../../../Resolvers/Mutations/Admin/blockServiceProvider');
describe("Given mutation is for block the SP",()=>{
    describe("When block made",()=>{
        it("should update SP models",function (){
            const mock=jest.fn()
            const models={
                SystemAdmin:{
                    findById:mock
                },
                ServiceProvider:{
                    updateOne:mock
                }
            }
            const user={}
            expect(adminBlockMutationTest.blockServiceProvider({},{},{models,user})).rejects.toThrow("You didn't have previlage");
        })
    })
})
