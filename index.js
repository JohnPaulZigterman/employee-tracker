//imports mysql and inquirer
const inquirer = require('inquirer');
const mysql = require('mysql2');

//establishes connection to database using a constant
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Beefham1!',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

const mainMenu = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'selection',
    choices: [
    'View All Departments', 
    'View All Roles', 
    'View All Employees', 
    'Add A Department', 
    'Add A Role', 
    'Add An Employee', 
    'Update An Employee Role',
    'Exit'
  ]
  }
];

function departmentsView() {
  // Query database
db.query('SHOW TABLES;', function (err, results) {
  if (results) {
    console.log(results);
  } else {
    console.log(err);
  };
});
}


inquirer
    .prompt(mainMenu)
    .then((response) => {
      if (response.selection == 'View All Departments') {
        departmentsView();
      }
    })