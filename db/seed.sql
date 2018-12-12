DROP DATABASE to_do_list;
CREATE DATABASE to_do_list;

\c to_do_list
CREATE TABLE todolist(
id serial primary key,
subject VARCHAR,
content VARCHAR
);

INSERT INTO todolist(subject, content) VALUES ('study', 'evening'),
('cooking', 'lunch'),
('reading', 'Noval'),
('cleaning', 'kidsroom');