// Require inquirer and mySQL library for usage in app
const inquirer = require('inquirer')
const mySQL = require('mysql2')

// Connect to created db, if using a different user/password please update
const db = mySQL.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`),
  );

  let employee_tracker = function () {
    inquirer.prompt([{
        type: 'list',
        name: 'toggle',
        message: 'Please select an action:',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employees role', 'LOG OUT']
    }])
    .then((answers) => {
        if (answers.prompt === 'View Departments') {

            employee_tracker();
        }
        else if (answers.prompt === 'View Roles'){
            
            employee_tracker();
        }
        else if (answers.prompt === 'View Employees'){

            employee_tracker();
        }
        else if (answers.prompt === 'Add a department'){

            employee_tracker();
        }
        else if (answers.prompt === 'Add a role'){

            employee_tracker();
        }
        else if (answers.prompt === 'Add an employee'){

            employee_tracker();
        }
        else if (answers.prompt === 'Update employees role'){

            employee_tracker();
        }
        else if (answers.prompt === 'LOG OUT'){
            db.end()
            console.log('Program terminated')
        }
    })
  }

  employee_tracker();