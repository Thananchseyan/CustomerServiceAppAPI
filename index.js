const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const URL = "mongodb+srv://testuser:test123@cluster0.yn6ru.mongodb.net/CustomerService?retryWrites=true&w=majority";

mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("connected to database");
    })
    .catch(console.log);



//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/',require('./routes/index'));

app.listen(3000,()=>{
    console.log("Server running");
})