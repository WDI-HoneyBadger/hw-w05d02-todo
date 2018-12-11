DROP DATABASE IF EXISTS list_db;
CREATE DATABASE list_db;
\c list_db
CREATE TABLE list(id serial primary key, name varchar, explanation text);
INSERT INTO list (name, explanation) VALUES ('solving the hw', 'work on submitting the hw before deadline') ;