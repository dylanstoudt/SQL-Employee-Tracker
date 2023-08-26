// Require inquirer and mySQL library for usage in app
const inquirer = require('inquirer')
const mySQL = require('mysql2')

// Connect to created db, if using a different user/password please update
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

let 