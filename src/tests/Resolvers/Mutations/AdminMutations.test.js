const adminMutationsTest=require('../../../Resolvers/Mutations/Admin/AdminMutations');
describe("given mutations are for admin sign in and sign out",()=>{
    describe("when admin signup",()=>{
        it("should create in system admin model",function (){
            const mock=jest.fn()
            const models={
                SystemAdmin:{
                    create:mock
                }
            }
            const data={}
            expect(adminMutationsTest.signUPAdmin({},data,{models})).rejects.toThrow("data and salt arguments required")
        })
    })
    describe("when sign in req",()=>{
        it("should find in system admin model",function (){
            const mock=jest.fn()
            const models={
                SystemAdmin: {
                    findOne:mock
                }
            }
            const data={}
            expect(adminMutationsTest.signINAdmin({},data,{models})).rejects.toThrow("Error Signin in");
        })
    })
})
