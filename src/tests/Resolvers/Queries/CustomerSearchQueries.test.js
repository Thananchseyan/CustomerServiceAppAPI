const customerSearchQueriesTest=require('../../../Resolvers/Queries/Customer/SearchQueries');
describe("given queries are about to search",()=>{
    describe("when customer wants to search provider by name",()=>{
        it("it should aggregate in service Provider model",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                ServiceProvider:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerSearchQueriesTest.searchSPByUsername({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
