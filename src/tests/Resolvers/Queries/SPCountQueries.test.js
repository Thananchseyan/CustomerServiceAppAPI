const spCountQueries=require('../../../Resolvers/Queries/ServiceProvider/CountQueries');
describe("Given queries are for get Counts for SP",()=>{
    describe("when SP call to get count of worker", () => {
        it("should aggregate Worker models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Worker: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spCountQueries.getCountWorkers({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when SP call to get count of Appointments", () => {
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
            expect(spCountQueries.getCountAppointments({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when SP call to get count of Bookings", () => {
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
            expect(spCountQueries.getCountBooking({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when SP call to get count of Messages", () => {
        it("should aggregate Message models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                Message: {
                    aggregate: mock
                },
                Worker:{
                    findById:mock
                },
                Customer:{
                    findById:mock
                }
            }
            const user = {}
            expect(spCountQueries.getCountMessages({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when SP call to get count of Notifications", () => {
        it("should aggregate Notification models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                NotificationSP: {
                    aggregate: mock
                },
                NotificationCustomer:{
                    aggregate:mock
                },
                NotificationWorker:{
                    aggregate:mock
                },
                Worker:{
                    findById:mock
                },
                Customer:{
                    findById:mock
                }
            }
            const user = {}
            spCountQueries.getCountNotification({},{},{models,user}).then(()=>{
                expect(mock).toHaveBeenCalled()
            })
            //expect(spCountQueries.getCountNotification({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when SP call to get count of Moderators", () => {
        it("should aggregate Moderator models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spCountQueries.getCountModerators({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when SP call to get count of Reviews", () => {
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
            expect(spCountQueries.getCountReviews({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
    describe("when SP call to get count of Worker notification", () => {
        it("should aggregate Notification Worker models", function () {
            const mock = jest.fn();
            const models = {
                ServiceProvider: {
                    findById: mock
                },
                Moderator: {
                    findById: mock
                },
                NotificationWorker: {
                    aggregate: mock
                }
            }
            const user = {}
            expect(spCountQueries.getCountWorkerNotification({}, {}, {models, user})).rejects.toThrow("You cannot query this");
        })
    })
})
