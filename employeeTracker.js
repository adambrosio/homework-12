// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
// Setting up connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpass",
  database: "employeeTracker_db"
});

connection.connect(function (err) {
  if (err) throw err;
});
// Function that runs initial question
function start() {
  inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees By Department",
      "View All Employees By Role",
      "Add Employee",
      "Add Department",
      "Add Role",
      "Update Employee Role"
    ]
  }).then(function (answer) {
    switch (answer.action) {
      // Variety of cases that fire a function depending on the selection from prompt
      case "View All Employees":
        viewEmployees();
        break;

      case "View All Employees By Department":
        viewDepartment();
        break;

      case "View All Employees By Role":
        viewRole();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Add Deparment":
        addDepartment();
        break;

      case "Add Role":
        addRole();
        break;

      case "Update Employee Role":
        updateRole();
        break;

    }
  });

  console.log("\n------------------------")
}
// Various functions to perform task depending on user selection from original prompt
function viewEmployees() { 
  var query = "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON role.department_id = department.id ORDER BY department.name DESC"; 
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table('\n',res);
  })
  start();
}

function viewDepartment() {
  var query = "SELECT * FROM department";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
  })
  start();
};

function viewRole(){
  var query = "SELECT * FROM role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
  })
  start();
};

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "Please enter employee's first name:"
    },
    {
      type: "input",
      name: "last_name",
      message: "Please enter employee's last name:"
    }
  ]).then(function ({ first_name, last_name }) {
    connection.query("INSERT INTO employee (first_name, last_name) VALUES ?", (["first_name", "last_name"]), function(err, res){
      if (err) throw err;
      console.log("Employee Added!");
      console.log(res);
      console.table(res);
    });
      start();
  })
}

function addDepartment() {

}

function addRole(){

}

function updateRole() {

}



start();