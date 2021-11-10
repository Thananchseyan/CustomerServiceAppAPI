const mutationsTest=require('../../../Resolvers/Mutations/mutation');
describe("Given mutations are some common mutations",()=>{
    describe("when sp signup",()=>{
        it("should create in SP model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider:{
                    create:mock
                }
            }
            /*mutationsTest.signUPSP({},{},{models}).then((data)=>{
                expect(mock).toHaveBeenCalled()
            })*/
            const data={}
            expect(mutationsTest.signUPSP({},data,{models})).rejects.toThrow("data and salt arguments required")
        })
    })
    describe("when sign in req",()=>{
        it("should find in SP model",function (){
            const mock=jest.fn()
            const models={
                ServiceProvider: {
                    findOne:mock
                }
            }
            const data={}
            expect(mutationsTest.signINSP({},data,{models})).rejects.toThrow("Error Signin in");
        })
    })
    describe("when Customer signup",()=>{
        it("should create in Customer model",function (){
            const mock=jest.fn()
            const models={
                Customer:{
                    create:mock
                }
            }
            const data={}
            expect(mutationsTest.signUPCustomer({},data,{models})).rejects.toThrow("data and salt arguments required")
        })
    })
    describe("when sign in req",()=>{
        it("should find in Customer model",function (){
            const mock=jest.fn()
            const models={
                Customer: {
                    findOne:mock
                }
            }
            const data={}
            expect(mutationsTest.signINCustomer({},data,{models})).rejects.toThrow("Error Signin in");
        })
    })
    describe("When Province are added",()=>{
        it("should create in Province model",function (){
            const mock=jest.fn()
            const models={
                Province:{
                    create:mock
                }
            }
            mutationsTest.addProvince({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When districts added",()=>{
        it("should create in District model",function (){
            const mock=jest.fn()
            const models={
                District:{
                    create:mock
                }
            }
            mutationsTest.addDistrict({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When Owners added",()=>{
        it("should create in Owner model",function (){
            const mock=jest.fn()
            const models={
                Owner:{
                    create:mock
                }
            }
            mutationsTest.addOwner({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When Service added",()=>{
        it("should create in Service model",function (){
            const mock=jest.fn()
            const models={
                Service:{
                    create:mock
                }
            }
            mutationsTest.addService({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When Membership added",()=>{
        it("should create in Membership model",function (){
            const mock=jest.fn()
            const models={
                Membership:{
                    create:mock
                }
            }
            mutationsTest.addMembership({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When Worker added",()=>{
        it("should create in Worker model",function (){
            const mock=jest.fn()
            const models={
                Worker:{
                    create:mock
                }
            }
            const data={}
            expect(mutationsTest.addWorker({},data,{models})).rejects.toThrow("data and salt arguments required")
        })
    })
})
