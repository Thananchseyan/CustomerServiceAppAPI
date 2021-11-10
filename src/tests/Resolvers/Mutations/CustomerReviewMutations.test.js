const customerReviewMutations=require('../../../Resolvers/Mutations/Customer/Review');
describe("Given mutations are for review of worker",()=>{
    describe("When customer send review to SP",()=>{
        it("should create customer review model",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                CustomerReview:{
                    create:mock
                }
            }
            const user={}
            expect(customerReviewMutations.sendReview({},{},{models,user})).rejects.toThrow("YOu have to log in to our system");
        })
    })
    describe("When customer update review of SP",()=>{
        it("should update customer review model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    findById:mock,
                    updateOne:mock
                },
                CustomerReview:{
                    findById:mock
                }
            }
            const user={}
            expect(customerReviewMutations.updateCustomerReview({},{},{models,user})).rejects.toThrow("Review didn't send correctly");
        })
    })
})
