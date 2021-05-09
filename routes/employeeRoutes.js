const express = require('express')
const router = express.Router()
const employeeControllers = require('../controllers/employeeControllers')


router.get('/', employeeControllers.getIndex)
router.get('/employee/add-new',employeeControllers.getAddNew)
router.post('/employee/add-new', employeeControllers.postAddNew)



module.exports = router