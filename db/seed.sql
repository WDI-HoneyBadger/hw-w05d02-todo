DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;

\c todo_db

CREATE TABLE todo (id SERIAL PRIMARY KEY, subject text, content text);

INSERT INTO todo (subject, content) VALUES
('Wake up', 'Gotta wake up early.'),
('Pray', 'Wake up spiritually.'),
('Breakfast', 'Have a healthy breakfast.'),
('Commute', 'Fly to work on a helicopter.'),
('Be Awesome', 'Solve world hunger in one day.');