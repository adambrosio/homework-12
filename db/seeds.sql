USE employeeTracker_db;

INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Marketing");

INSERT INTO role (title, salary, department_id) VALUES ("IT Manager", 100000, 1), ("Lead Engineer", 100000, 1), ("Junior Developer", 70000, 1), ("Salesperson", 60000, 2), ("Sales Manager", 70000, 2), ("Lawyer", 100000, 3), ("Lead Marketer", 85000, 4), ("Junior Marketer", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bobby", "D", 1, null),
("Ben", "Dover", 2, 1),
("Stan", "Dup", 3, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Goombah", 5, null),
("Lenny", "Lanes", 4, 4),
("Jerry", "Colombo", 4, 4);