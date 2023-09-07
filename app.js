/*
    The Beginning of Everything
    Created : 7th september 2023 by Team Shodat
*/

const express = require('express')
const { port } = require('./config/config')
const indexRoutes = require('./routes/route')
const app = express()

// Middlewares
app.use(express.json({ limit: '10mb' })) // for parsing application/json
app.use(express.urlencoded({ extended: true, limit: '10mb' })) // for parsing application/x-www-form-urlencoded

app.use('/api', indexRoutes)


app.listen(port, () => console.log(`Server Running on port ${port}!`))