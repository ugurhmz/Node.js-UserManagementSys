const Employee = require('../models/employeeModel')



exports.getIndex = (req,res) => {
    Employee.find()
        .then(employees =>{
            res.render('index', {
                employees:employees
            })
        })
        .catch(err => {
            console.log(err)
        })
}


exports.getAddNew = (req,res) => {
    res.render('new_employee')
}


exports.postAddNew = (req,res) => {

    const newEmployee = {
        name: req.body.name,
        designation : req.body.designation,
        salary : req.body.salary
    }

    Employee.create(newEmployee)
        .then(employee => {
            res.redirect('/')
            console.log("employee added successfully..")
        })
        .catch(err => {
            console.log(err)
        })

}




