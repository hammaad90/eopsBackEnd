/*
    User Routes
    Created : 7th September 2023
*/

const express = require('express')
const { messages } = require('../utils/utils')

// Essential Variables
const router = express.Router();
let routeSection; // To be used to config each routing section

const userValidator = require('../validator/user')
const userController = require('../controller/user')


/*---------------------------- User Section -------------------------*/
routeSection = '';

// user Single
router.get(routeSection, userController.fetchSingleUser)

// user list
router.get(routeSection + '/all', userController.fetchUsers)


/*---------------------------- End User Section Section -------------------------*/


// Defining any arbitary route
router.all('/*', function (req, res) {
    res.send(messages('routes', 'blank'))
})

module.exports = router
