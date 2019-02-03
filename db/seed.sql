-- add your seed data here!!!! 
DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
\c todo_db

CREATE TABLE todo(
    id serial primary key, 
    subject varchar, 
    context text
);

INSERT INTO todo(subject, context) VALUES
('True Detective', 'The first season of True Detective, an American anthology crime drama television series created by Nic Pizzolatto, premiered on January 12, 2014, on the premium cable network HBO. The principal cast consisted of Matthew McConaughey, Woody Harrelson, Michelle Monaghan, Michael Potts, and Tory Kittles. The season comprised eight episodes, and its initial airing concluded on March 9, 2014. As an anthology, each True Detective season has its own self-contained story, following a disparate set of characters in various settings.'),
('Fargo', 'Self-made real estate mogul Emmit Stussy seemingly has it all -- a successful business, which has earned him the nickname "Parking Lot King of Minnesota," and a perfect family. That does not sit well with slightly younger brother Ray, who has always lived in Emmits shadow and blames his brother for'),
('power', 'Power is an American television drama broadcast on Starz created by Courtney A. Kemp.[1] The series follows James St. Patrick (played by Omari Hardwick), nicknamed "Ghost", owner of a popular New York City nightclub, and a major player in one of the city s biggest illegal drug networks. He struggles to balance these two lives, and the balance topples when he realizes he wants to leave the drug ring in order to support his legitimate business, and commit to his mistress. The series premiered on June 7, 2014. As of September 9, 2018, 48 episodes of Power have aired. The fifth season of Power premiered on July 1, 2018. Power has been renewed for a sixth season');
