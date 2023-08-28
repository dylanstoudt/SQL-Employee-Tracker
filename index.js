// Require inquirer and mySQL library for usage in app
const inquirer = require('inquirer')
const mySQL = require('mysql2')

// Connect to created db, if using a different user/password please update
const db = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_tracker_db'
});

db.connect((err) => {
    if (err) throw (err);
    console.log(`Connected to the employee_tracker_db database.`);
    employee_tracker();
}
)

let employee_tracker = function () {
    inquirer.prompt({
        type: 'list',
        name: 'toggle',
        message: 'Please select an action:',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employees role', 'LOG OUT']
    })
        .then((answer) => {
            if (answer.toggle === 'View Departments') {
                db.query('SELECT * FROM department', (err, res) => {
                    if (err) throw (err);
                    console.log('Viewing departments: ')
                    console.table(res);
                    employee_tracker();
                })
            }
            if (answer.toggle === 'View Roles') {
                db.query('SELECT * FROM role', (err, res) => {
                    if (err) throw (err);
                    console.log('Viewing roles:')
                    console.table(res);
                    employee_tracker();
                })
            }
            if (answer.toggle === 'View Employees') {
                db.query('SELECT * FROM employee', (err, res) => {
                    if (err) throw (err);
                    console.log('Viewing employees:')
                    console.table(res);
                    employee_tracker();
                })
            }
            else if (answer.toggle === 'Add a department') {
                inquirer.prompt({
                    type: 'input',
                    name: 'dept',
                    message: 'What is the department you would like to add?',
                    validate: deptInput => {
                        if(deptInput){
                            return true
                        }
                        else{
                            console.log('Please input a department.')
                            return false
                        }
                    }
                })
                .then((answer) =>{
                    db.query(`INSERT INTO department (name) VALUES ${answer}`), [answer.dept], (err) => {
                        if (err) throw (err);
                        console.log(`Inserted ${answer.dept} to the database`)
                        employee_tracker();
                    }
                })
            }
            else if (answer.toggle === 'Add a role') {

                employee_tracker();
            }
            else if (answer.toggle === 'Add an employee') {

                employee_tracker();
            }
            else if (answer.toggle === 'Update employees role') {

                employee_tracker();
            }
            else if (answer.toggle === 'LOG OUT') {
                db.end();
                console.log('Program terminated');
            }
        })
}