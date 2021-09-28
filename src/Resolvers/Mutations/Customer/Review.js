module.exports={
    sendReview:async (parent,{by,to,rating,content},{models})=>{
        return models.CustomerReview.create({
            by:by,
            to:to,
            rating:rating,
            content:content
        })
    }
}

