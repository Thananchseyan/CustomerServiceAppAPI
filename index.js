const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config()

mongoose.connect(process.env.db_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("connected to database");
    })
    .catch(console.log);



//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/',require('./routes/index'));

app.listen(process.env.port || 3000,()=>{
    console.log("Server running");
})