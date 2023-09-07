const express = require('express')
const router = express.Router();
const authValidator = require('../utils/authValidator');

const user = require('./user')
const login = require('./login')



router.use('/register', login)
router.use('/user', authValidator, user)

module.exports = router