const { Router } = require('express');
const express = require('express');
const { route } = require('./product.routes');
const router = express.Router();

// @route   POST /users/signin
// @desc    Route for User SignIn;
// @access  Public
router.post('signin',(req,res)=>{
    //validate username && password

    //create token

    //send back to  User;
});


// @route
// @desc
// @access
router.post('signup', (req,res)=>{
    //validate username && password

    //create token

    //send back to  User;
})


module.exports = router;