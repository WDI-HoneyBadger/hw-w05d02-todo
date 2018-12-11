DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;

\c todolist

CREATE TABLE todo(
  id serial primary key, 
  subject varchar,
  content varchar
);

INSERT INTO todo (subject, content) VALUES
('project', 'next week will be a difficult week'),
('fun', 'the folwing week will be a fun week after 6 weeks of hard work'),
('January', 'we will back yo realty again');