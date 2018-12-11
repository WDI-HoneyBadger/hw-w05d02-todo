
DROP DATABASE IF EXISTS ToDo_db;
CREATE DATABASE todo_db;
CREATE TABLE todo(id serial primary key, subject varchar, content varchar);
INSERT INTO todo (subject, content) VALUES ('tttt', 'mmmm');
INSERT INTO todo (subject, content) VALUES ('dsf','vyhb');
INSERT INTO todo (subject, content) VALUES ('fyhh','bhbj');

