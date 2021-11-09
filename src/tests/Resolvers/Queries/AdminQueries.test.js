const adminQueriesTest=require('../../../Resolvers/Queries/Admin/AdminQueries');
describe("Given quries are for admmin",()=>{
    describe("When show customers query called",()=>{
        it("should aggregate in customer model",function (){
            const mock=jest.fn();
            const models={
                Customer:{
                    aggregate:mock
                }
            }
            adminQueriesTest.showCustomers({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When show SPs query called",()=>{
        it("should aggregate in ServiceProvider model",function (){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    aggregate:mock
                }
            }
            adminQueriesTest.showSPS({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When show moderators query called",()=>{
        it("should aggregate in moderator model",function (){
            const mock=jest.fn();
            const models={
                Moderator:{
                    aggregate:mock
                }
            }
            adminQueriesTest.showModerators({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("when admin query to get open state SPs",()=>{
        it("should aggregate service provider models",function (){
            const mock=jest.fn();
            const models={
                SystemAdmin: {
                    findById:mock
                },
                ServiceProvider: {
                    aggregate:mock
                }
            }
            const user={}
            expect(adminQueriesTest.admin_getOpenSP({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
    describe("when admin query to get payment on a date",()=>{
        it("should aggregate payment models",function (){
            const mock=jest.fn();
            const models={
                SystemAdmin: {
                    findById:mock
                },
                Payment: {
                    aggregate:mock
                }
            }
            const user={}
            expect(adminQueriesTest.admin_getDateWiseTotalPayment({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
    describe("when admin query to get payment a specific date",()=>{
        it("should aggregate Payment models",function (){
            const mock=jest.fn();
            const models={
                SystemAdmin: {
                    findById:mock
                },
                Payment: {
                    aggregate:mock
                }
            }
            const user={}
            expect(adminQueriesTest.admin_getSpecificDateTotalPayment({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
    describe("when admin query to get payable amount per day",()=>{
        it("should aggregate appointment models",function (){
            const mock=jest.fn();
            const models={
                SystemAdmin: {
                    findById:mock
                },
                Appointment: {
                    aggregate:mock
                }
            }
            const user={}
            expect(adminQueriesTest.admin_getDateWiseTotalPayableAmount({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
    describe("when admin query to get payable amount on a specific day",()=>{
        it("should aggregate appointment models",function (){
            const mock=jest.fn();
            const models={
                SystemAdmin: {
                    findById:mock
                },
                Appointment: {
                    aggregate:mock
                }
            }
            const user={}
            expect(adminQueriesTest.admin_getSpecificDateWiseTotalPayableAmount({},{},{models,user})).rejects.toThrow("You cannot do this");
        })
    })
})
