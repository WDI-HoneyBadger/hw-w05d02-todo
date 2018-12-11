DROP DATABASE IF EXISTS  todo_db ;
CREATE DATABASE todo_db;
\c todo_db;
CREATE TABLE dolist (
    id SERIAL ,
    name varchar, 
  definition text
     
);

INSERT INTO dolist(name, definition) VALUES
('play soccer', 'with my friends in jeddah'),
('watch movie', 'with my family'),
('visting', 'my mom');
