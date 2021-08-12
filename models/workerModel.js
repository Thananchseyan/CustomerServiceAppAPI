const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerModelSchema = new Schema({
    workerId:{
        type: String,
        unique: true,
        required: true
    },
    providerId:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    phone:{
        type: Number,
        required: true
    }
},{timestamp: true});

/*
//static method to login worker
workerModelSchema.statics.login = async function(workerId,password){
    const worker = await this.findOne({workerId});

    if (worker){
        const auth = await bcrypt.compare(password,worker.password);
        if (auth){
            return worker
        }
        throw Error('Incorrect password');

    }
    throw Error('Incorrect worker ID');
}
*/

const workerModel = mongoose.model('worker',workerModelSchema);

module.exports = workerModel;