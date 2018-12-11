DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;

\c todo_db

CREATE TABLE todo(
  id serial primary key, 
  subject varchar,
  content varchar
);

INSERT INTO todo(subject, content) VALUES
('dragon', 'a large, serpent-like legendary creature that appears in the folklore of many cultures around the world.'),
('Eagle', 'are large, powerfully built birds of prey, with heavy heads and beaks. Even the smallest eagles'),
('honey badger', 'has a fairly long body, but is distinctly thick-set and broad across the back. Its skin is remarkably loose, and allows it to turn and twist freely within it'),
('Sun', 's the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion');