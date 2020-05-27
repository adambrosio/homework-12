USE employeeTracker_db;

INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Marketing");

INSERT INTO role (title, salary, department_id) VALUES ("IT Manager", 100000, 1), ("Lead Engineer", 100000, 1), ("Software Engineer", 80000, 1), ("Salesperson", 60000, 2), ("Sales Manager", 70000, 2), ("Lawyer", 100000, 3), ("Lead Marketer", 85000, 4), ("Junior Marketer", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Corleone", 1, null),
("Tony", "Soprano", 2, 1),
("Tony", "Montana", 3, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Rothstein", 5, null),
("Henry", "Hill", 4, 4),
("Jerry", "Colombo", 4, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Hagen", 6, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luca", "Changretta", 7, null),
("Tommy", "Shelby", 8, 8);