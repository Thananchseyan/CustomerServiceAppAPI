module.exports={
    showWorkers: async (parent,args,{models})=>{
        return models.Worker.find();
    }
}
