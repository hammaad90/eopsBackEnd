/*
    Database Connection Configuration
*/

// Some needed modules --------- trying removing one
const { createPool } = require('mysql')
const { mysqlPoolLimit, mysqlHost, mysqlUser, mysqlPassword, mysqlDatabase, mysqlTimezone, isDebug } = require('./config')

// Essential Variables
const pool = createPool({
    connectionLimit: mysqlPoolLimit,
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDatabase,
    timezone: mysqlTimezone
})

const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        pool.query(query.text, query.values, (error, results) => {
            if (error) {
                reject(error)
            }
            if (!results) {
                results = []
            }
            resolve(results)
        })
    })
}

const processQuery = async (query) => {
    if (isDebug) console.log(query)
    let response = null
    try {
        response = await executeQuery(query)
    } catch (e) {
        console.log(e.sqlMessage)
    }

    return response
}

const tables = {
    user: 'user'
}

// Exports ------------- Needed utmost as without these nothing will work
module.exports = {
    processQuery,
    tables
}