const infoMutations=require('../../../Resolvers/Mutations/ServiceProvider/EditInfo');
describe("Given mutations are for editing info of SP",()=>{
    describe("When SP edit services",()=>{
        it("should update SP model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock,
                    updateOne:mock
                },
                Moderator:{
                    findById:mock
                }
            }
            const user={}
            expect(infoMutations.pushService({},{},{models,user})).rejects.toThrow("you cannot do this");
        })
    })
    describe("When SP edit district",()=>{
        it("should update SP model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock,
                    updateOne:mock
                },
                Moderator:{
                    findById:mock
                }
            }
            const user={}
            expect(infoMutations.pushDistrict({},{},{models,user})).rejects.toThrow("you cannot do this");
        })
    })
    describe("When SP edit services",()=>{
        it("should update SP model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock,
                    updateOne:mock
                },
                Moderator:{
                    findById:mock
                }
            }
            const user={}
            expect(infoMutations.RemoveService({},{},{models,user})).rejects.toThrow("you cannot do this");
        })
    })
    describe("When SP edit districts",()=>{
        it("should update SP model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock,
                    updateOne:mock
                },
                Moderator:{
                    findById:mock
                }
            }
            const user={}
            expect(infoMutations.RemoveDistrict({},{},{models,user})).rejects.toThrow("you cannot do this");
        })
    })
    describe("When SP edit info",()=>{
        it("should update SP model",function (){
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
                Worker:{
                    findById:mock,
                    updateOne:mock
                }
            }
            const user={}
            expect(infoMutations.editInfo({},{},{models,user})).rejects.toThrow("You didn't have privilege");
        })
    })
})
