const router = require('express').Router();
let Employee = require('../models/employee.model');

//GET ALL EMPLOYEES
router.route('/').get((req,res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

//GET AN EMPLOYEE
router.route('/:id').get((req,res) => {
  Employee.findById(req.params.id)
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

//DELETE AN EMPLOYEE
router.route('/:id').delete((req,res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Employee has deleted!!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//CREATE AN EMPLOYEE
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const salary = req.body.salary;
  const avatar = req.body.avatar;

  const newEmployee = new Employee({
    name, age, salary, avatar,
  })

  newEmployee.save()
    .then(() => res.json('New Employee Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//UPDATE AN EMPLOYEE
router.route('/update/:id').post((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => {
      employee.name = req.body.name;
      employee.age = req.body.age;
      employee.salary = req.body.salary;
      employee.avatar = req.body.avatar;

      employee.save()
        .then(() => res.json('Employee Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;