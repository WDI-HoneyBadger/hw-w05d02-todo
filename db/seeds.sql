DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db

CREATE TABLE todo(
  id serial primary key, 
  name varchar, 
  explanation varchar, 
  priority varchar
);

INSERT INTO todo(name, explanation, priority) VALUES
('Finish Homework.', 'Finish howork week 5 day 2 whenever you come home.', '1'),
('Make Dinner', 'Cook Pasta with pink sauce', '3'),
('Clean the apartment', 'After finishing the homework, start clean the apartment', '2'),
('Hang the clothes.', 'Prepare the clothes for tomorrow', '2'),
('Sleep on time', 'You need to get enough sleep.', '4');