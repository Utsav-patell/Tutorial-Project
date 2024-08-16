const express = require('express'); // Express package is imported
const app = express(); // Created instances of express
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/merndb").then(()=>{
    console.log("Connected Sucessfully");
    // Kept App.listen here so that app will not run if there is error in connecting
    app.listen(4000); // This is port number 
}).catch((error)=>console.log("Error Caught",error));


// Created a simple API;
        // route and method
app.get('/',(req,res)=>{
    res.send('API Running'); // This will be displayed on the website
});

