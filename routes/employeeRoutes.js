const express = require('express')
const router = express.Router()




router.get('/',(req,res) => {
    res.render('index')
})


router.get('/employee/add-new', (req,res) => {

    res.render('new_employee')
})


module.exports = router