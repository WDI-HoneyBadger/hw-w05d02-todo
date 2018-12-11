DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;
\c todo_list

CREATE TABLE todo(
  id serial primary key, 
  subject text, 
  content text

);

INSERT INTO todo(subject, content) VALUES 
('Sunday', 'Laundy'), 
('Monady', 'Family gathering'), 
('Wednesday', 'Submit the homework'); 




