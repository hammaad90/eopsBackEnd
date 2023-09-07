/*
    Login Routes
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
const express = require('express')
const { messages } = require('../utils/utils')

// Essential Variables
const router = express.Router();
let routeSection; // To be used to config each routing section


/*---------------------------- User Section -------------------------*/
routeSection = '';

const loginController = require('../controller/login')
const loginValidator = require('../validator/login')

// register user
router.post('/sign-up', loginValidator.validate('signUpUser'), loginController.signUpUser)

// login user
router.post('/sign-in', loginValidator.validate('signInUser'), loginController.signInleUser)

/*---------------------------- End USer Section -------------------------*/

// Defining any arbitary route
router.all('/*', function (req, res) {
    res.send(messages('routes', 'blank'))
})

module.exports = router
