module.exports = {
    booking: async (parent,{by,to,workStationAddress,workStationDistrict,description},{models})=>{
        try{
            return models.Booking.create({
                by:by,
                to:to,
                workStationAddress:workStationAddress,
                workStationDistrict:workStationDistrict,
                description:description
            });
        }catch (err){
            console.log(err);
            throw new Error("Booking didn't happen");
        }

    },
    saveCustomerAccountDetails: async (parent,{card_holder,acc_no,valid_date,name_on_card},{models})=>{
        try{
            return models.CustomerAccount.create({
                card_holder:card_holder,
                acc_no:acc_no,
                valid_date:valid_date,
                name_on_card:name_on_card
            });
        }catch (err){
            console.log(err);
            throw new Error("Error in storing the details of the customer account")
        }
    }
}
