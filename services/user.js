/*
    User Services
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
const user = require('../model/user')
const { messages } = require('../utils/utils')
const moment = require('moment')





// Fetch details of single user
const fetchSingleUser = async (id) => {
    let response = await user.fetchSingleUser(id)
    if (response.length >= 0) {
        if (response.length == 1) {
            let data = {}
            let responseData = response[0]
            data.id = responseData.id ? responseData.id : ''
            data.email = responseData.email ? responseData.email : ''
            data.first_name = responseData.first_name ? responseData.first_name : ''
            data.last_name = responseData.last_name ? responseData.last_name : ''
            data.account_type = responseData.account_type ? responseData.account_type : ''
            data.created_at = responseData.created_at ? responseData.created_at : ''
            data.updated_at = responseData.updated_at ? responseData.updated_at : ''
            response = {
                status: 200,
                data: data
            }
        } else {
            response = {
                status: 401,
                message: messages('errors', 'notFound')
            }
        }
    } else {
        response = {
            status: 401,
            message: response
        }
    }
    return response
}

// Fetching list of user
const fetchUserList = async (offset, limit) => {
    let response = await user.fetchUserList(offset, limit)
    let responseData = []
    if (response.length >= 0) {

        for (let i = 0; i < response.length; i++) {
            let data = {}
            data.id = response[i] ? response[i].id : ''
            data.email = response[i] ? response[i].email : ''
            data.first_name = response[i] ? response[i].first_name : ''
            data.last_name = response[i] ? response[i].last_name : ''
            data.account_type = response[i] ? response[i].account_type : ''
            data.created_at = (response[i].created_at) ? response[i].created_at : ''
            data.updated_at = (response[i].updated_at) ? response[i].updated_at : ''
            responseData.push(data)
        }

        response = {
            status: 200,
            data: responseData
        }
    } else {
        response = {
            status: 401,
            message: response
        }
    }
    return response
}


// update user:
const updateUser = async (id, first_name, last_name, account_type) => {
    let response = await user.fetchSingleUser(id)
    if (response.length == 1) {
        let row = response[0]

        first_name = first_name ? first_name : row.first_name
        last_name = last_name ? last_name : row.last_name
        account_type = account_type ? account_type : row.account_type

        let updated_at = moment.utc().format("YYYY-MM-DD HH:mm:ss")

        response = await user.updateUser(id, first_name, last_name, account_type, updated_at)
        if (response.affectedRows == 1) {
            response = {
                status: 200,
                message: messages('success', 'userUpdate')
            }
        } else {
            response = {
                status: 401,
                message: messages('errors', 'notFound')
            }
        }
    } else {
        response = {
            status: 401,
            message: messages('errors', 'notFound')
        }
    }

    return response
}

// delete user:
const deleteUser = async (id) => {
    let response = await user.fetchSingleUser(id)
    if (response.length == 1) {
        let updated_at = moment.utc().format("YYYY-MM-DD HH:mm:ss")

        response = await user.deleteUser(id, updated_at)

        if (response.affectedRows == 1) {
            response = {
                status: 200,
                message: messages('success', 'userDelete')
            }
        } else {
            response = {
                status: 401,
                message: messages('errors', 'dbDelete')
            }
        }
    } else {
        response = {
            status: 401,
            message: messages('errors', 'notFound')
        }
    }

    return response
}

// Exports ------------- Needed utmost

module.exports = {
    fetchSingleUser,
    fetchUserList,
    updateUser,
    deleteUser
}