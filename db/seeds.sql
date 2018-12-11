DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db;
CREATE TABLE todo(id serial primary key, subject varchar(255), content text);
INSERT INTO todo (subject, content) VALUES 
('haircut', 'i want to go to the salon at 10pm'),
('supermarkit', 'buy some fruits and vigitables and some snak'),
('homework', 'i have to sumbit a hw at 12am maximum'),
('bookstore', 'look for javascript and html books');