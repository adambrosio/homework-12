const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootpass",
  database: "employeeTracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
});

function start() {
  inquirer.prompt({
    type: "list",
    name:"action",
    message: "What would you like to do?",
    choices: [
      "Add employees, departments, and roles",
      "View emplyees, departments, and roles",
      "Update employee roles"
    ]
  }).then(function(answer) {
    switch (answer.action) {
      case "Add employees, departments, and roles":
        // some function
        break;

      case "View emplyees, departments, and roles":
        // some function
        break;

      case "Update employee roles":
        // some function
        break;
    }
  });
}