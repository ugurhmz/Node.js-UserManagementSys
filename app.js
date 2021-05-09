const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const path = require('path')
const connectDB = require('./utility/database')
const  employeeRoutes = require('./routes/employeeRoutes')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')


// MONGO DB connection
connectDB()
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}))

app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")


app.use(methodOverride('_method'))
app.use(session({
    secret:'mysecret',
    resave:true,
    saveUninitialized:true

}))

app.use(flash())

app.use((req,res,next) => {
    res.locals.success_msg = req.flash(('success_msg'))
    res.locals.error_msg = req.flash(('error_msg'))
    next()
})


app.use('/',employeeRoutes)




app.listen(PORT, () => {
    console.log(`Connected... http://localhost:${PORT}`)
})



