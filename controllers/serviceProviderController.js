const Worker = require('../models/workerModel');
const bcrypt = require('bcrypt');

const addWorker= async (req,res)=>{
    
    const { id:workerId,spId:providerId,name,password:pass,phone } = req.body;

    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(pass,salt);

    
    const worker = new Worker({ workerId, providerId, name, password, phone });

    worker.save()
        .then((result)=>{
            res.status(200);
            console.log(result);
        })
        .catch((err)=>{
            if(err.code === 11000)
                res.send('Worker Already exists');
        });
    

};

const viewWorkers = (req,res)=>{
    Worker.find()
        .then((results)=>{
            res.send(results)
            console.log(results);
        })
        .catch(console.log)
};

const viewWorker = (req,res)=>{

    const {id:workerId} = req.params;

    Worker.find(workerId)
        .then((result)=>{
            res.send(result);
            console.log(result);
        })
        .catch(console.log)
};



const editWorker = (req,res) =>{

    const {id:workerId} = req.params;
    const {spId:providerId,name,password,phone } = req.body;

    Worker.updateOne({workerId},{
        $set:{providerId,name,password,phone}
    })
        .then((result)=>{
            res.status(200);
        })
        .catch(console.log);

};

const deleteWorker = (req,res) =>{

    const { id:workerId } = req.params; 

    Worker.deleteOne({ workerId })
        .then((result) => {
            res.status(200);
            console.log(result)
        })
        .catch(console.log);

};




module.exports = {
    addWorker,
    viewWorkers,
    viewWorker,
    editWorker,
    deleteWorker
}