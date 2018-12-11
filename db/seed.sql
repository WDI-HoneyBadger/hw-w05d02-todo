DROP DATABASE IF EXISTS todo_lists;
CREATE DATABASE todo_lists;

\c todo_lists

CREATE TABLE todo(
  id serial primary key, 
  name varchar, 
  definition text
);

INSERT INTO todo(name, definition) VALUES
('note1', 'text1'),
('note2', 'text2'),
('note3', 'text3 ');



