const personalQueries=require('../../../Resolvers/Queries/ServiceProvider/PersonalQueries');
describe("Given queries are for personal queries",()=>{
    describe("When SP me called",()=>{
        it("should find in Service Provider models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                }
            }
            const user={}
            expect(personalQueries.SP_me({},{},{models,user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("When get my reviews called",()=>{
        it("should aggregate in Customer Review models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                CustomerReview:{
                    aggregate:mock
                }
            }
            const user={}
            expect(personalQueries.getMyReviews({},{},{models,user})).rejects.toThrow("You cannot view reviews");
        })
    })
    describe("When get my SP called",()=>{
        it("should find in SP and moderator models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                }
            }
            const user={}
            expect(personalQueries.getMySP({},{},{models,user})).rejects.toThrow("YOu cannot do this");
        })
    })
    describe("When get specific customer reviews called",()=>{
        it("should aggregate in Customer Review models",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock
                },
                Moderator:{
                    findById:mock
                },
                CustomerReview: {
                    aggregate:mock
                }
            }
            const user={}
            expect(personalQueries.getCustomerReview({},{},{models,user})).rejects.toThrow("You cannot view reviews");
        })
    })
})
