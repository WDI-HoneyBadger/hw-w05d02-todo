DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db
CREATE TABLE todo(id SERIAL PRIMARY KEY, subject VARCHAR(255), content VARCHAR(255));
INSERT INTO todo (subject, content) VALUES 
('1' , 'do homework'), ('2', 'do the otherhomework'), ('3', 'sleep, you are tired');
