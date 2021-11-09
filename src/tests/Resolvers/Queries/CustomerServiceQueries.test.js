const customerServiceQueriesTest=require('../../../Resolvers/Queries/Customer/ServiceSelection');
describe("Given queries are related to the selection of sp",()=>{
    describe("when he wants to get SP by service",()=>{
        it("should aggregate SP model",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    aggregate:mock
                }
            }
            customerServiceQueriesTest.getServiceProvidersByService({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("when call get services",()=>{
        it("should aggregate services models",function (){
            const mock=jest.fn();
            const models={
                Service: {
                    aggregate:mock
                }
            }
            customerServiceQueriesTest.getServices({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
})
