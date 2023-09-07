/*
    Utility Functions for Project
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
const { validationResult } = require('express-validator')
const crypto = require('crypto')

// Essential Variables
const { hashKey } = require('../config/config')


// Generating Custom has for Text
const generateHash = (text, type = 'sha512') => {
    return crypto.createHmac(type, hashKey).update(text).digest('hex')
}


// Message Locating Function
const messages = (process, point) => {
    const languageResource = require('../utils/message')
    let response = languageResource[process][point]
    return response

}


// Controller Request Handler
const requestHandler = async (req, res, callback) => {
    try {
        let errors = validationResult(req)

        if (!errors.isEmpty()) {
            console.log(errors.array())
            return res.status(401).json({ status: 401, message: messages('errors', 'validationError') })
        }

        let data = await callback()

        return res.status(data.status).json(data)

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}


// Exports ------------- Needed utmost as without these nothing will work
module.exports = {
    generateHash,
    messages,
    requestHandler
}