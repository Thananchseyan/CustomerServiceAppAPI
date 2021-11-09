const dashboardQueries=require('../../../Resolvers/Queries/ServiceProvider/DashBoardQueries');
describe("Given queries are for dashboard of SP",()=>{
    describe("when SP call to get Booking Feed", () => {
        it("should aggregate Booking models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Booking: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(dashboardQueries.bookingFeed({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when SP call to get Work stats", () => {
        it("should aggregate Booking models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Booking: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(dashboardQueries.workStats({}, {}, {models, user})).rejects.toThrow("You cannot do this query");
        })
    })
    describe("when SP call to get Rating stats", () => {
        it("should aggregate Customer Review models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                CustomerReview: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(dashboardQueries.ratingStats({}, {}, {models, user})).rejects.toThrow("You cannot do this query");
        })
    })
    describe("when SP call to get finished Work stats", () => {
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
            expect(dashboardQueries.finishedWorkStats({}, {}, {models, user})).rejects.toThrow("You cannot do this query");
        })
    })
})
