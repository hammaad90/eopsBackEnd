/*
    User Controllers
    Created : 7th September 2023
*/

// Some needed modules --------- trying removing one
const userService = require('../services/user')
const { requestHandler } = require('../utils/utils')
const { ACCOUNT_TYPE } = require('../utils/constant')



// Module for fetching list of user
module.exports.fetchUsers = async (req, res) => {
    return await requestHandler(req, res, async () => {
        let {skip, limit} = req.query
        return await userService.fetchUserList(parseInt(skip), parseInt(limit))
    })
}


// Module for fetching details of single user
module.exports.fetchSingleUser = async (req, res) => {
    return await requestHandler(req, res, async () => {
        let { id } = req.token.user
        return await userService.fetchSingleUser(id)
    })
}

// Module for updating details of single user
module.exports.updateUser = async (req, res) => {
    return await requestHandler(req, res, async () => {
        let { id } = req.token.user
        let { first_name, last_name, account_type} = req.body
        return await userService.updateUser(id, first_name, last_name, account_type)
    })
}

// Module for deleting user
module.exports.deleteUser = async (req, res) => {
    return await requestHandler(req, res, async () => {
        let { id } = req.token.user
        return await userService.deleteUser(id)
    })
}
