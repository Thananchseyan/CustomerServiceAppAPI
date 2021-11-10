const customerPaymentMutations=require('../../../Resolvers/Mutations/Customer/Payment');
describe("Given mutations are for payment",()=>{
    describe("When customer make payment to sp",()=>{
        it("should create payment",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                Payment:{
                    create:mock
                }
            }
            customerPaymentMutations.payment({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled()
            })
        })
    })
    describe("When customer confirm payment",()=>{
        it("should update Appointment",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    findById:mock
                },
                Appointment:{
                    updateOne:mock
                }
            }
            const user={}
            expect(customerPaymentMutations.confirmPayment({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
})
