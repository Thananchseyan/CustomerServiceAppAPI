const messageMutationsTest=require('../../../Resolvers/Mutations/MessageMutations');
describe("given mutations are about messages",()=>{
    describe("when send message reqd",()=>{
        it("should create in Message Models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Customer:{
                    findById:mock
                },
                Worker:{
                    findById:mock
                },
                Messsage:{
                    create:mock
                }
            }
            const data={}
            const user={}
            expect(messageMutationsTest.sendMessage({},data,{models,user})).rejects.toThrow("You have to signin to send message");
        })
    })
    describe("when read message req",()=>{
        it("should update in Message Models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                Customer:{
                    findById:mock
                },
                Worker:{
                    findById:mock
                },
                Message:{
                    updateOne:mock
                }
            }
            const data={}
            const user={}
            expect(messageMutationsTest.readMessage({},data,{models,user})).rejects.toThrow("You have to signin to send message");
        })
    })
})
