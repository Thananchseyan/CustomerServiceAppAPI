const roleQueryTest=require('../../../Resolvers/Queries/RoleQuery');
describe("Given Queries are related to roles",()=>{
    describe("When get my role query called",()=>{
        it("Should return roles",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Worker:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Customer:{
                    findById:mock
                }
            }
            const user={}
            expect(roleQueryTest.getMyRole({},{},{models,user})).rejects.toThrow("Log-in failed");
        })
    })
    describe("when get me query called",()=>{
        it("should aggregate user models",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    findById:mock,
                    aggregate:mock
                },
                Worker:{
                    findById:mock,
                    aggregate:mock
                },
                Moderator:{
                    findById:mock,
                    aggregate:mock
                },
                Customer:{
                    findById:mock,
                    aggregate:mock
                }
            }
            const user={}
            expect(roleQueryTest.getMe({},{},{models,user})).rejects.toThrow("Log-in failed");
        })
    })
})
