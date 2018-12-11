DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;
\c todo_list

CREATE TABLE todo (
  id serial primary key, 
  subject varchar, 
  content varchar 
  
);

INSERT INTO todo (subject, content) VALUES ('Sunday','Visit DR'),
('Monday','Vist Family'), ('Tuesday', 'Shopping'), ('Wednesday','Visit the Zoo'),('Thursday','Submit the project');