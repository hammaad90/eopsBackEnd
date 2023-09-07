/*
    User Validations
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
const { check } = require('express-validator')

// Validation Function
const validate = (route) => {
    var validationResponse = []
    switch (route) {
        case 'fetchSingleUser':
            validationResponse = [
                check('id').exists().trim().notEmpty()
            ]
            break
    }

    return validationResponse
}

// Exports ------------- Needed utmost as without these nothing will work
module.exports = {
    validate
}