/*
    Login Controllers
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
const loginService = require('../services/login')
const { requestHandler } = require('../utils/utils')



// Module for fetching list of user
module.exports.signUpUser = async (req, res) => {
    return await requestHandler(req, res, async () => {
        const {first_name, last_name, email, password, account_type} = req.body
        return await loginService.signUpUser(first_name, last_name, email, password, account_type)
    })
}


// Module for fetching details of single user
module.exports.signInleUser = async (req, res) => {
    return await requestHandler(req, res, async () => {
        const { email, password} = req.body
        return await loginService.signInleUser(email, password)
    })
}
