
DROP DATABASE IF EXISTS todolist_db;
CREATE DATABASE todolist_db;
\c todolist_db
CREATE TABLE list(id serial primary key, name varchar, explanation text);
INSERT INTO list(name, explanation) VALUES ('homework','hw-w05-d05: ToDo') ; 