DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db

CREATE TABLE todo(
  id serial primary key, 
  task varchar, 
  kindofsupport varchar, 
  building varchar
 
);

INSERT INTO todo(task, kindofsupport, building) VALUES
( 'training other staff members on troubleshooting and diagnosing problems' , 'virtually','C1'),
( 'writing, editing, and revising training manuals for new and updated software and hardware' , 'remotely','binhomran'),
( 'following up with customers to ensure full resolution of issues' , 'remotely','binhomran'),
( 'installing or changing software to fix issues' , 'virtually','C1'),
( 'accessing hardware or software for clients to make changes and fix problems' , 'remotely','binhomran');
