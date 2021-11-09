const customerPersonalQueriesTest=require('../../../Resolvers/Queries/Customer/PersonalQueries');
describe("given gueries are about personal info",()=>{
    describe("when customer wants to get his info",()=>{
        it("should findbyid in customer model",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    findById:mock
                }
            }
            const user={}
            expect(customerPersonalQueriesTest.Customer_me({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
