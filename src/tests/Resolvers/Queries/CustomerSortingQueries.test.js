const customerSortingQueriesTest=require('../../../Resolvers/Queries/Customer/Sorting');
describe("Given queries are about sorting related",()=>{
    describe("when district check happens",()=>{
        it("should aggregate SP models",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    aggregate:mock
                }
            }
            customerSortingQueriesTest.checkDistrictOnServiceProvider({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled()
            })
        })
    })
    describe("when default sorting called",()=>{
        it("should aggregate SP models",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    aggregate:mock
                }
            }
            customerSortingQueriesTest.defaultSorting({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled()
            })
        })
    })
    describe("when rating wise sorting called",()=>{
        it("should aggregate SP models",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    aggregate:mock
                }
            }
            customerSortingQueriesTest.sortingByRating({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled()
            })
        })
    })
    describe("when SP has to be selected with both service and district",()=>{
        it("should aggregate sp models",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                ServiceProvider:{
                    aggregate:mock
                }
            }
            const user={}
            expect(customerSortingQueriesTest.getServiceProviderByDistrictService({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
})
