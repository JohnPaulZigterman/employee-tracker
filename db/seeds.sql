INSERT INTO department (name)
VALUES ("Sales"),
       ("IT"),
       ("Accounting"),
       ("HR"),
       ("Production");

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100.55, 1),
       ('Sales Associate', 70.55, 1),
       ('Head of IT', 120.55, 2),
       ('IT Associate', 80.55, 2),
       ('Head Accountant', 150.55, 3),
       ('Accountant', 100.33, 3),
       ('HR Manager', 125.44, 4),
       ('HR Intern', 40.81, 4),
       ('Production Manager', 110.58, 5),
       ('Production Associate', 70.65, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lemmy', "Killminster", 1, null),
       ('Danny', 'Elfman', 2, 1),
       ('Matt', 'Groening', 2, 1),
       ('Jack', 'Black', 3, null),
       ('Kyle', "Gass", 4, 4),
       ('Rhys', 'Darby', 4, 4),
       ('Fred', 'Rogers', 5, null),
       ('Steve', 'Irwin', 6, 7),
       ('Robert', 'Ross', 6, 7),
       ('Brian', 'Limond', 7, null),
       ('John', 'Cleese', 8, 10),
       ('Terry', 'Gilliam', 8, 10),
       ('Taika', 'Waititi', 9, null),
       ('Jordan', 'Peele', 10, 13),
       ('Keegan', 'Michael-Key', 10, 13);


