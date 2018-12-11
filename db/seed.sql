

DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;

\c todo_list

CREATE TABLE todo(

id SERIAL PRIMARY KEY,
subject VARCHAR,
content text,

);

INSERT INTO todo (id , subject , content) VALUES
(1 , 'homework ' , 'on each lesson we have, a homework is followed by'),
(2 , 'shopping ' , 'shopping for necessities'),
(3 , ' cooking ' , ' cook my own dinner after returning back home '),
(4 , 'review' , 'review past lessons for mind refreshing'),