DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;

\c todo_db

CREATE TABLE todo(
  id serial primary key, 
  subject varchar,
  content varchar
);

INSERT INTO todo(subject, content) VALUES
('Al-Nassr Football Club', 'Naṣr meaning "Victory") is a Saudi Arabian football club based in Riyadh. Formed in 1955 the club plays its home games at King Fahd Stadium and Prince Faisal bin Fahd Stadium. Its home colours are yellow and blue.

Al-Nassr is one of the most popular clubs in Saudi Arabia, with 24 national trophies as well as various regional and friendly championships to its name.[3]

The club have won 8 Premier League titles, 2 GCC Champions League titles, 3 Saudi Crown Prince Cup, 6 Saudi Kings Cups, and holds the impressive feat of pulling a historic Asian double in 1998, by claiming both the Asian Cup Winners Cup and Asian Super Cup,[3] This achievement landed Al-Nassr a spot in the first FIFA Club World Cup where it won the Fair Play award, thus, making Al-Nassr the first club from Asia to play on an international level, as well as becoming the first team in the world to win such an award.[4] This in turn, gave the club its famous nickname: "The Internationa.'),
('Saudi Arabia', 'constituting the bulk of the Arabian Peninsula. With a land area of approximately 2,150,000 km2 (830,000 sq mi), Saudi Arabia is the largest sovereign state in the Middle East, geographically the fifth-largest in Asia, second-largest in the Arab world after Algeria and 12th-largest in the world. Saudi Arabia is bordered by Jordan and Iraq to the north, Kuwait to the northeast, Qatar, Bahrain, and the United Arab Emirates to the east, Oman to the southeast and Yemen to the south. It is separated from Israel and Egypt by the Gulf of Aqaba. It is the only nation with both a Red Sea coast and a Persian Gulf coast, and most of its terrain consists of arid desert'),
('Cristiano Ronaldo', 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM (European Portuguese: [kɾiʃˈtjɐnu ʁoˈnaɫdu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for Italian club Juventus and the Portugal national team. Often considered the best player in the world and regarded by many as one of the greatest players of all time,[4][5][6] Ronaldo has a record-tying five Ballon d Or awards,[note 2] the most for a European player, and is the first player to win four European Golden Shoes. He has won 26 trophies in his career, including five league titles, five UEFA Champions League titles and one UEFA European Championship. A prolific goalscorer, Ronaldo holds the records for most official goals scored in Europe s top-five leagues (405), the UEFA Champions League (121), the UEFA European Championship (9), as well as those for most assists in the UEFA Champions League (34) and the UEFA European Championship (6). He has scored over 680 senior career goals for club and country.'),
('Romeo Montague', 'is the protagonist of William Shakespeare s tragedy, The Tragedy of Romeo and Juliet. The son of Lord Montague and his wife, Lady Montague, he secretly loves and marries Juliet, a member of the rival House of Capulet, through a priest named Friar Laurence. Forced into exile after slaying Juliet s cousin, Tybalt, in a duel, Romeo commits suicide upon hearing falsely of Juliet s death.');




