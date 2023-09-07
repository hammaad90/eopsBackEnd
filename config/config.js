/*
    Project Configuration
*/

// Some needed modules --------- trying removing one
const dotenv = require('dotenv')
dotenv.config();

/* IGNORE ---------- Coding requirements */
// console.log(`${process.env.PGPASSWORD}`);
/* IGNORE ---------- Coding requirements */

// Exports ------------- Needed utmost as without these nothing will work
module.exports = {
    nodeEnv:process.env.NODE_ENV,
    serverUrl: process.env.DEV_URL,
    prodUrl: process.env.PROD_URL,
    port: process.env.PORT,
    appName: process.env.APP_NAME,
    mysqlHost: process.env.MYSQLHOST,
    mysqlUser: process.env.MYSQLUSER,
    mysqlDatabase: process.env.MYSQLDATABASE,
    mysqlPassword: process.env.MYSQLPASSWORD,
    mysqlPoolLimit: process.env.MYSQLPOOLLIMIT,
    mysqlTimezone: process.env.MYSQLTIMEZONE,
    isDebug: true,
    hashKey: process.env.HASH_KEY,
    TokenDuration: process.env.TOKEN_DURATION,
    jwtSecret: process.env.JWT_SECRET
}