module.exports = {
    showCustomers:async (parent,{args},{models})=>{
        return models.Customer.find();
    }
}
