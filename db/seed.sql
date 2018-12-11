DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db
CREATE TABLE todolist(id serial primary key, subject varchar, content varchar);
INSERT INTO todolist(subject, content) VALUES
('meeting', 'meeting with waad on Sunday'),
('homework', 'submit hw before midnight!'),
('interview', 'on Monday');