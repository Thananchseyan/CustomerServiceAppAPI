const messageQueriesTest=require('../../../Resolvers/Queries/MessageQueries');
describe("Given queries about msessages",()=>{
    describe("When getMyMessages query called",()=>{
        it("should aggregate message model",function (){
            const mock=jest.fn();
            const models={
                Message:{
                    aggregate:mock
                },
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
            expect(messageQueriesTest.getMyMessages({},{},{models,user})).rejects.toThrow('You have to signin')
            /*messageQueriesTest.getMyMessages({},{},{models,user}).then((data)=>{
                expect(mock).rejects.toThrow("You have to signin")
            })*/
            }
        )
    })
})
