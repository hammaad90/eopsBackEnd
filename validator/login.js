/*
    Login Validations
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
const { check } = require('express-validator')

// Validation Function
const validate = (route) => {
    var validationResponse = []
    switch (route) {
        case 'signUpUser':
            validationResponse = [
                check('first_name').exists().trim().isString(),
                check('last_name').exists().trim().isString(),
                check('email').exists().trim().isEmail(),
                check('password').exists().trim().isLength({ min: 3 })
            ]
            break

            case 'signInUser':
            validationResponse = [
                check('email').exists().trim().isEmail(),
                check('password').exists().trim().isLength({ min: 3 })
            ]
            break
    }

    return validationResponse
}

// Exports ------------- Needed utmost as without these nothing will work
module.exports = {
    validate
}