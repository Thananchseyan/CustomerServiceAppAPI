module.exports={
    sendMessage: async (parent,{by,from,message},{models})=>{
        return models.Message.create({
            by:by,
            from:from,
            message:message
            }
        );
    }
}
