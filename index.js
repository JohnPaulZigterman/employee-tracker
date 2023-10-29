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

function departmentView() {

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

function roleView() {
  
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

function employeeView() {
  
  const mysqlQuery = `
  SELECT employee.id AS ID, 
  employee.first_name AS First,
  employee.last_name AS Last,
  role.title AS Title,
  role.salary AS Salary,
  department.name AS Department,
  CONCAT (manager.first_name, " ", manager.last_name) AS Manager
  FROM employee
  JOIN role ON employee.role_id = role.id
  JOIN department ON role.department_id = department.id
  JOIN employee manager ON employee.manager_id = Manager.id
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
        departmentView();
      } else if (response.selection == 'View All Roles') {
        roleView();
      } else if (response.selection == 'View All Employees') {
        employeeView();
      } else if (response.selection == 'Add A Department') {
        departmentAdd();
      } else if (response.selection == 'Add A Role') {
        roleAdd();
      } else if (response.selection == 'Add An Employee') {
        employeeAdd();
      } else if (response.selection == 'Add A Department') {
        departmentAdd();
      } else if (response.selection == 'Update An Employee Role') {
        roleUpdate();
      } else {
        return;
      }
    })
  }

  mainMenu();