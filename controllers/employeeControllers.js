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


exports.getSearchEmployees = (req,res) => {
    
    res.render('search_employee',{
        employee:""
    })
}


//_____________________________________ SEARCHING____________________________
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

exports.getQuery = (req,res) =>{
   
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');

        Employee.find( {
            $or: [
                {"name": regex}, {"designation":regex}
            ]
        })
        .then(employee => {
            res.render('search_employee', {
                employee:employee
            })
        })
        .catch(err => {
            console.log(err)
        })
 
  





    /*
    let search_query = {
        name: req.query.search
    }

    Employee.findOne(search_query)
        .then(employee => {
            res.render('search_employee', {
                employee:employee
            })
        })
        .catch(err => {
            console.log(err)
        })
    */
    
}
