DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db

CREATE TABLE todo_table(
  id serial primary key, 
  subject varchar, 
  content varchar
);

INSERT INTO todo_table(subject, content) VALUES
('work','go to work'),
('gym','go to gym'),
('sleep','go to sleep');