const workerPersonalQueriesTest=require('../../../Resolvers/Queries/Worker/PersonalQueries');
describe("Given queries are for worker's personal info",()=>{
    describe("When worker me called",()=>{
        it("should find in worker model",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    findById:mock
                }
            }
            const user={}
            expect(workerPersonalQueriesTest.worker_me({},{},{models,user})).rejects.toThrow("You cannot do this");
            /*workerPersonalQueriesTest.worker_me({},{},{models,user}).then(()=>{
                expect(mock).toHaveBeenCalled()
            })*/
        })
    })
})
