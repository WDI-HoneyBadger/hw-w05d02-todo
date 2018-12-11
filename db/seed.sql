DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;
\c todo_list

CREATE TABLE todo(
  id SERIAL PRIMARY KEY, 
  task VARCHAR(255), 
  description VARCHAR(255), 
  due_time TIME
);

INSERT INTO todo(task, description, due_time) VALUES
('attend class', 'present yourself in the class on-time, everyday', '09:00:00'),
('participation', 'engage in class discussions and online discussions', '23:59:00'),
('am-ex', 'do your morning coding exercise to warm up for the lesson' , '10:20:00'),
('coding lab', 'apply today lesson as much as needed to solve the lab', '14:00:00'),
('hw', 'do your homework to show your understanding for the lesson', '23:59:00'),
('project', 'come up with an idea where you can apply everything you have been taking in class on it', '10:20:00');