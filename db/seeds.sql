DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

\c todo_db;

CREATE TABLE todo_list (id SERIAL PRIMARY KEY, todo_subject VARCHAR(255), todo_content text, added_date timestamp);
-- CREATE TABLE done_list (id SERIAL PRIMARY KEY, todo_list_id FOREIGN KEY REFERENCES todo_list.id, done_date timestamp);
INSERT INTO todo_list (todo_subject,todo_content) VALUES
('gym','renew membership'),
('GA','DO the assignment'),
('family','Drop by my granparents' ),
('sideTing','add more stuff to my game');
-- ('sideTing','work on hw-w05d02');

-- INSERT INTO done_list(todo_list_id) VALUES(5);




