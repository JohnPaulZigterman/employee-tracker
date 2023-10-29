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

const mainMenuContents = [
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

  const mysqlQuery = `
  SELECT department.id AS ID, 
  department.name AS Name
  FROM department`;

  db.query(mysqlQuery, function (err, results) {
    if (results) {
      console.table(results);
    } else {
      console.log(err);
    };
    mainMenu();
  });
}

function rolesView() {
  
  const mysqlQuery = `
  SELECT role.id AS ID, 
  role.title AS Title,
  role.salary AS Salary,
  department.name AS Department
  FROM role
  JOIN department ON role.department_id = department.id
  `;

  db.query(mysqlQuery, function (err, results) {
    if (results) {
      console.table(results);
    } else {
      console.log(err);
    };
    mainMenu();
  });
}


function mainMenu() {
  inquirer
    .prompt(mainMenuContents)
    .then((response) => {
      if (response.selection == 'View All Departments') {
        departmentsView();
      } else if (response.selection == 'View All Roles') {
        rolesView();
      }
    })
  }

  mainMenu();