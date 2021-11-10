const adminApprovalMutationTest=require('../../../Resolvers/Mutations/Admin/ApproveServiceProvider');
describe("Given mutation is for approve the SP",()=>{
    describe("When approval made",()=>{
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
            expect(adminApprovalMutationTest.approveServiceProvider({},{},{models,user})).rejects.toThrow("You didn't have previlage");
        })
    })
})
