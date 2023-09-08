/*
    User Model
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
// const {dbSchema} = require('../config/config')
const {processQuery, tables} = require('../config/database')
const { messages } = require('../utils/utils')

// Create a new usser
const createUser = async (first_name, last_name, email, password, account_type, created_at, updated_at) => {
    try {
        let query = {
            text: `INSERT INTO ${tables.user} (first_name, last_name, email, password, account_type, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            values: [first_name, last_name, email, password, account_type, created_at, updated_at]
        }
        const response = await processQuery(query)
        return response
    } catch (e) {
        // throw Error()
        return messages('errors', 'dbInsert')
    }
}



// Fetch list of user
const fetchUserList = async (offset, limit) => {
    try {
        let query = {
            text: `SELECT id, first_name, last_name, email, account_type, created_at, updated_at FROM ${tables.user} WHERE deleted = false ORDER BY created_at DESC LIMIT ?, ?`,
            values: [offset, limit]
        }
        const response = await processQuery(query)
        return response
    } catch (e) {
        // throw Error()
        return messages('errors', 'dbSelect')
    }
}

// Fetch details of Single user
const fetchSingleUser = async (id) => {
    try {
        let query = {
            text: `SELECT id, first_name, last_name, email, account_type, created_at, updated_at FROM ${tables.user} WHERE id = ? AND deleted = false  ORDER BY created_at DESC`,
            values: [id]
        }
        const response = await processQuery(query)
        return response
    } catch (e) {
        // throw Error()
        return messages('errors', 'dbSelect')
    }
}

// Fetch details of one user from Email
const fetchUserFromEmail = async (email) => {
    try {
        let query = {
            text: `SELECT id, first_name, last_name, email, password, account_type, created_at, updated_at FROM ${tables.user} WHERE email = ?`,
            values: [email]
        }

        const response = await processQuery(query)
        return response
    } catch (e) {
        // throw Error()
        return messages('errors', 'dbSelect')
    }
}

// Update Administrator Details
const updateUser = async (id, first_name, last_name, account_type, updated_at) => {
    try {
        let query = {
            text: `UPDATE ${tables.user} SET first_name = ?, last_name = ?, account_type = ?, updated_at = ? WHERE id = ?`,
            values: [first_name, last_name, account_type, updated_at, id]
        }
        const response = await processQuery(query)
        return response
    } catch (e) {
        // throw Error()
        return messages('errors', 'dbUpdate')
    }
}





/* Beware while this is uncommented Only professional should use it */
// Delete a user
const deleteUser = async (id, updated_at) => {
    try {
        let query = {
            text: `UPDATE ${tables.user} SET deleted = true, updated_at = ? WHERE id = ?`,
            values: [updated_at, id]
        }
        const response = await processQuery(query)
        return response
    } catch (e) {
        // throw Error()
        return messages('errors', 'dbDelete')
    }
}

// Exports ------------- Needed utmost as without these nothing will work

module.exports = {
    createUser,
    fetchUserList,
    fetchSingleUser,
    fetchUserFromEmail,
    deleteUser,
    updateUser
}