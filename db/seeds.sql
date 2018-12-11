 DROP DATABASE IF EXISTS to_Do_db;
 CREATE DATABASE to_Do_db;
\c to_Do_db
 CREATE TABLE toDo(id serial primary key, subject varchar, content varchar);

INSERT INTO toDo (subject, content) VALUES
('hw1','sunday'),
('hw2', 'monday'),
('hw3', 'tuesday'),
('hw4', 'wensday'),
('hw5', 'thursday'),
('hw6', 'friday');



