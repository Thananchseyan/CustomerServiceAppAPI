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


const workerModel = mongoose.model('worker',workerModelSchema);

module.exports = workerModel;