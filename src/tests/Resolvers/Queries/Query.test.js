const queries=require('../../../Resolvers/Queries/Query');
const {AuthenticationError,ForbiddenError}=require('apollo-server-express');
describe("Given some common Queries",()=>{
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
    describe ("When show districts query called",()=>{
        it("should call aggregate function in district",function(){
            const mock=jest.fn();
            const models={
                District:{
                    aggregate:mock
                }
            }
            queries.showDistricts({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When show districts query called with pagination",()=>{
        it("should aggregate district model",function(){
            const mock=jest.fn();
            const models={
                District:{
                    aggregate:mock
                }
            }
            queries.showDistricts_pagination({},{offset:5,page:1},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("when show owners query called",()=>{
        it("should call find owner method",function(){
            const mock=jest.fn();
            const models={
                Owner:{
                    find:mock
                }
            }
            queries.showOwners({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("When show sercice providers called",()=>{
        it("should call find serviceProvider model",function(){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    find:mock
                }
            }
            queries.showServiceProviders({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })

        })
    })
    describe("When district by province query called",()=>{
        it("should aggregate",function (){
            const mock=jest.fn();
            const models={
                District:{
                    aggregate:mock
                }
            }
            queries.districtsByProvince({},{ProvinceName:"north"},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
        }
    )
    describe("When Check user name in all users",()=>{
        it("should call findone ",function(){
            const mock=jest.fn();
            const models={
                ServiceProvider:{
                    findOne:mock
                },
                Moderator:{
                    findOne:mock
                },
                Worker:{
                    findOne:mock
                },
                Customer:{
                    findOne:mock
                }
            }
            queries.CheckUsername({},{username:"nesamani12"},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("Should call aggregate appointment",()=>{
        it("should call aggregate Appointment",function (){
            const mock=jest.fn();
            const models={
                Appointment:{
                    findOne:mock
                }
            }
            queries.CheckAppointmentID({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
    describe("when query to get memberships",()=>{
        it ("should call aggregate in Membership",function(){
            const mock=jest.fn();
            const models={
                Membership: {
                    aggregate:mock
                }
            }
            queries.getMemberships({},{},{models}).then(()=>{
                expect(mock).toHaveBeenCalled();
            })
        })
    })
})
