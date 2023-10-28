//imports express and mysql
const express = require('express');
const mysql = require('mysql2');

//sets port and defines app to be express
const PORT = process.env.PORT || 3001;
const app = express();

//middleware for ensuring json data is used
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

  