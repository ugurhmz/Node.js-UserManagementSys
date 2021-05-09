const express = require('express')
const router = express.Router()
const employeeControllers = require('../controllers/employeeControllers')


router.get('/', employeeControllers.getIndex)
router.get('/employee/add-new',employeeControllers.getAddNew)
router.post('/employee/add-new', employeeControllers.postAddNew)
router.get('/employee/search', employeeControllers.getSearchEmployees)
router.get('/employee/query',employeeControllers.getQuery)

module.exports = router