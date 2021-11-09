const spAppQueries=require('../../../Resolvers/Queries/ServiceProvider/AppointmentQueries');
describe("Given queries are for SP appointments",()=> {
    describe("when SP call to get their ongoing works", () => {
        it("should aggregate Appointment models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Appointment: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spAppQueries.getMyOngoingWorks({}, {}, {models, user})).rejects.toThrow("You didn't have privilage");
        })
    })
    describe("when SP call to get their works", () => {
        it("should aggregate Appointment models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Appointment: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spAppQueries.getMyWorks({}, {}, {models, user})).rejects.toThrow("You didn't have privilage");
        })
    })
    describe("when SP call to get their finished works", () => {
        it("should aggregate Appointment models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Appointment: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spAppQueries.getMyFinishedWorks({}, {}, {models, user})).rejects.toThrow("You didn't have privilage");
        })
    })
    describe("when SP call to get an appointment", () => {
        it("should aggregate Appointment models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Appointment: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spAppQueries.getAppointment({}, {}, {models, user})).rejects.toThrow("You didn't have privilage");
        })
    })
    describe("when SP call to get their unpaid works", () => {
        it("should aggregate Appointment models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Appointment: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spAppQueries.getMyUnpaidWorks({}, {}, {models, user})).rejects.toThrow("You didn't have privilege");
        })
    })
})
