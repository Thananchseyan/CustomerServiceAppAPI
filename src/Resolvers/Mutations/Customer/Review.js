module.exports={
    sendReview:async (parent,{to,rating,content},{models,user})=>{
        const customer=await models.Customer.findById(user.id);
        if (!customer){
            throw new Error("YOu have to log in to our system");
        }
        return models.CustomerReview.create({
            by:user.id,
            to:to,
            rating:rating,
            content:content
        })
    }
}

