DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db

CREATE TABLE todo(
  id serial primary key,
  day varchar, 
  supject varchar, 
  content varchar 

);

INSERT INTO todo( day, supject, content)VALUES
('Sunday','Study', 'study coding' ),
('Monday','Meeting', 'friend' ),
('Tuesday','play', 'call of duties ' ),
('Wednesday','Activity', 'hiking'),
('Thursday','play', 'call of duties ' ),
('Friday','Activity', 'hiking'),
('Saturday','play', 'call of duties ' );

