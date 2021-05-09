const express = require('express')
const { connect } = require('mongodb')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const path = require('path')
const connectDB = require('./utility/database')
const  employeeRoutes = require('./routes/employeeRoutes')

// MONGO DB connection
connectDB()

app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(express.static('public'))


app.use('/',employeeRoutes)




app.listen(PORT, () => {
    console.log(`Connected... http://localhost:${PORT}`)
})



