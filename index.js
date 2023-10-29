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
    name: 'mainmenu',
    choices: [
    'View All Departments', 
    'View All Roles', 
    'View All Employees', 
    'Add A Department', 
    'Add A Role', 
    'Add An Employee', 
    'Update An Employee Role']
  }
];

inquirer
    .prompt(mainMenu)
    .then((response) => {
      console.log(response);
    })