module.exports = {
    district: async (WorkingRange, args, { models }) => {
        return models.District.find({_id:{$in:WorkingRange.district}});
    }
}