DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db
CREATE TABLE todo(id serial primary key, subject varchar , content varchar);
INSERT INTO todo(subject, content) VALUES
('Sunday','Mulhmeclia homework'),
('Monday','modern history'),
('Tuesday','a server is a computer that serves websites or data to a "client"'),
('Wednesday','write modern');