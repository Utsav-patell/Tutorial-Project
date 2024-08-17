const express = require('express');
const User = require('../models/userModel');
const router = express.Router();


// Created Different API;
// POST - TO CREATE ON DATABASE OR TO SEND TO DATABASE
router.post('/', async (req,res)=>{
    // in Frontend same name should be there for Input feild
    const {name,email,age} = req.body
try {
    const userAdded = await User.create({
        name:name,
        email:email,
        age:age
    });
    res.status(201).json(userAdded)    
} catch (error) {
    console.log(error);
    res.status(400).json({error:error.message});
}

})
        // route and method
// To Fetch the details from the Database
router.get('/',async(req,res)=>{
    try {
    const showAll = await User.find();
    res.status(200).json({showAll});    
        
    } catch (error) {
    console.log("Error: ",error);
    res.status(500).json({error:error.message});    
    }
// This will be displayed on the website
});

// To Fetch detail of any Signle user using any params 
router.get('/:id',async(req,res)=>{
    const { id } = req.params; // Use req.params to fetch details from URL and 
    //  req.body to fetch detail from input Feild
    try {
    const singleUser = await User.findById({_id:id});
    res.status(200).json({singleUser});    
        
    } catch (error) {
    console.log("Error: ",error);
    res.status(500).json({error:error.message});    
    }
// This will be displayed on the website
});


// To Delete the details from Database we use router.Delete
router.delete('/:id',async(req,res)=>{
    const { id } = req.params; // Use req.params to fetch details from URL and 
    //  req.body to fetch detail from input Feild
    try {
    const DeleteUser = await User.findByIdAndDelete({_id:id});
    res.status(200).json({DeleteUser});    
        
    } catch (error) {
    console.log("Error: ",error);
    res.status(500).json({error:error.message});    
    }
// This will be displayed on the website
});

// Now we can update Details in Database using Patch Function. For this we need Id from URL
// and updated Information from body; 
router.patch('/:id',async(req,res)=>{
    const { id } = req.params; // Use req.params to fetch details from URL and 
    const updatedDetails = req.body; //  req.body to fetch detail from input Feild
    try {
    updateUser = await User.findByIdAndUpdate(id,updatedDetails,{new:true});
    res.status(200).json({updateUser});    
        
    } catch (error) {
    console.log("Error: ",error);
    res.status(500).json({error:error.message});    
    }
// This will be displayed on the website
});


// So we have made basic API FOR CRUD operations.

// Exported to import in Main file;
module.exports = router; 