const customerSPQueriesTest=require('../../../Resolvers/Queries/Customer/ServiceProvider');
describe("given queries are about SP related queries from customer",()=>{
    describe("when customer wants to get the review of SPs",()=>{
        it("should aggregate customer review models",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                },
                CustomerReview:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerSPQueriesTest.getReviewsOfServiceProviders({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
})
