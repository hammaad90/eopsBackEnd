/*
    User Services
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
const user = require('../model/user')
const { TokenDuration, jwtSecret } = require('../config/config')
const { messages, generateHash } = require('../utils/utils')
const moment = require('moment')
const jwt = require('jsonwebtoken')
const httpStatus = require('http-status')





// Fetch details of single user
const signUpUser = async (first_name, last_name, email, password, account_type) => {
    let created_at = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    let updated_at = created_at
    password = generateHash(password)
    // check user with same email exist or not:
    let response = await user.fetchUserFromEmail(email)
    if (response.length > 0) {
        return response = {
            status: httpStatus.CONFLICT,
            message: messages('errors', 'alreadyExist')
        }
    }

    response = await user.createUser(first_name, last_name, email, password, account_type, created_at, updated_at)
    if (response.affectedRows > 0) {
        response = {
            status: httpStatus.OK,
            message: messages('success', 'userCreate')
        }
    } else {
        response = {
            status: httpStatus[401],
            message: messages('errors', 'dbInsert')
        }
    }

    return response
}

// Fetching list of user
const signInleUser = async (email, password) => {
    let response = await user.fetchUserFromEmail(email)
    if (response.length == 0) {
        return response = {
            status: httpStatus.NOT_FOUND,
            message: messages('errors', 'notFound')
        }
    }
    if (response[0].password === generateHash(password)) {

        const authToken = jwt.sign(
            {
                user: {
                    id: response[0].id,
                    email: response[0].email,
                    account_type: response[0].account_type,
                    expiresIn: TokenDuration,
                },
            }, jwtSecret, { expiresIn: TokenDuration });
        return response = {
            status: httpStatus.OK,
            data: { id: response[0].id, email: response[0].email, account_type: response[0].account_type, authToken }
        }
    }

    response = {
        status: httpStatus.UNAUTHORIZED,
        message: messages('errors', 'wrongPassword')
    }

    return response
}


// Exports ------------- Needed utmost

module.exports = {
    signUpUser,
    signInleUser
}