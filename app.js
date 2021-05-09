const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const path = require('path')


app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")


app.use(express.static('public'))




app.listen(PORT, () => {
    console.log(`Connected... http://localhost:${PORT}`)
})



