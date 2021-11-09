const moderatorPersonalQueriesTest=require('../../../Resolvers/Queries/Moderator/PersonalQueries');
describe("Given queries are for moderators",()=>{
    describe("when moderator wants to gets info",()=>{
        it("should find in moderaor model",function (){
            const mock=jest.fn()
            const models={
                Moderator:{
                    findById:mock
                }
            }
            const user={}
            expect(moderatorPersonalQueriesTest.moderator_me({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
