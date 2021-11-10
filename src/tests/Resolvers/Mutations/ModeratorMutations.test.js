const moderatorMutations=require('../../../Resolvers/Mutations/Moderator/SignIN');
describe("given mutations are for moderator sign up",()=>{
    describe("when moderator signIN",()=>{
        it("should find in Moderator model",function (){
            const mock=jest.fn()
            const models={
                Moderator:{
                    findOne:mock
                }
            }
            expect(moderatorMutations.signINModerator({},{},{models})).rejects.toThrow("Error Sign In in")
        })
    })
    describe("when sign in mod and sp",()=>{
        it("should find in moderator or SP model",function (){
            const mock=jest.fn()
            const models={
                Moderator: {
                    findOne:mock
                },
                ServiceProvider:{
                    findOne:mock
                }
            }
            expect(moderatorMutations.signINModSP({},{},{models})).rejects.toThrow('Error Sign In in');
        })
    })
})
