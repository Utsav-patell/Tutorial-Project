const mongoose = require('mongoose');

// Created Schema
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    email : {
        type:String,
        unique:true,
        required:true
    },
    age : {
        type:Number,
        unique:false
    }
},{timestamps:true}
);

// Create Model (We will interact with the database using Model only)
const User = mongoose.model('User',userSchema);
module.exports = User; 
