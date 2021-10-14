const queries=require('../../../Resolvers/Queries/Query');
const {AuthenticationError,ForbiddenError}=require('apollo-server-express');
describe("Some common Queries",()=>{
    describe("When call show Province function",()=>{
        it("should call find function in province",function (){
            const mock=jest.fn();
            const models={
                Province:{
                    find:mock
                }
            }
            queries.showProvinces({},{},{models}).then((data)=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    });
})
