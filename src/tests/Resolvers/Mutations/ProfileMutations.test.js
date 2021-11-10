const profileMutationsTest=require('../../../Resolvers/Mutations/ProfileMutations');
describe("Given mutations are for profile",()=>{
    describe("when set pW req",()=>{
        it("should update in respected Models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock,
                    updateOne:mock
                },
                Moderator:{
                    findById:mock,
                    updateOne:mock
                },
                Customer:{
                    findById:mock,
                    updateOne:mock
                },
                Worker:{
                    findById:mock,
                    updateOne:mock
                }
            }
            const data={}
            const user={}
            expect(profileMutationsTest.setPassword({},data,{models,user})).rejects.toThrow("data and salt arguments required");
        })
    })
    describe("when set profile req",()=>{
        it("should update in respected Models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock,
                    updateOne:mock
                },
                Moderator:{
                    findById:mock,
                    updateOne:mock
                },
                Customer:{
                    findById:mock,
                    updateOne:mock
                },
                Worker:{
                    findById:mock,
                    updateOne:mock
                }
            }
            const data={}
            const user={}
            expect(profileMutationsTest.setProfilePic({},data,{models,user})).rejects.toThrow("Profile upload failed");
        })
    })
})
