DROP DATABASE IF EXISTS todo;
CREATE DATABASE todo;
\c todo
CREATE TABLE todoList(
    id serial primary key, 
    subject text ,
    description text
);

INSERT INTO todoList(subject ,  description) VALUES('CLEAN','clean the house'),('PRAY','isha'),('WORKOUT' , 'Leg Day');