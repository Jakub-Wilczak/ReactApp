DROP DATABASE IF EXISTS `wordcards_dev`;
CREATE DATABASE `wordcards_dev`;
USE `wordcards_dev`;

CREATE TABLE user (
                         user_id INT NOT NULL AUTO_INCREMENT,
                         first_name VARCHAR(50),
                         last_name VARCHAR(50),
                         gender VARCHAR(6),
                         birth_date DATE,
                         PRIMARY KEY (user_id)
);

CREATE TABLE lesson (
                        lesson_id INT NOT NULL AUTO_INCREMENT,
                        lesson_name VARCHAR(50) NOT NULL,
                        user_id INT NOT NULL,
                        creation_date DATE,
                        PRIMARY KEY (lesson_id)
);

CREATE TABLE wordcard (
                          wordcard_id INT NOT NULL AUTO_INCREMENT,
                          lesson_id INT NOT NULL,
                          challenge_word VARCHAR(200),
                          secret_word VARCHAR(200),
                          PRIMARY KEY (wordcard_id)
);


CREATE TABLE user_lesson(
                               student_id INT NOT NULL,
                               lesson_id INT NOT NULL,
                               join_date DATE,
                               PRIMARY KEY(student_id,lesson_id)
);


INSERT INTO user (first_name, last_name, gender, birth_date)
VALUES
    ('Jakub', 'Wilczak', 'Male','2000-07-23'),
    ('Zuzanna', 'Mętrak', 'Female', '2000-01-27'),
    ('Tomek', 'Mędrek', 'Male', '1984-5-30'),
    ('Alek', 'Jędrzejczyk', 'Male', '2009-08-10'),
    ('James', 'Ackerman','Male', '1978-11-27'),
    ('Janusz', 'Krzywiński', 'male', '2020-01-01'),
    ('Bartosz', 'Kisiel', 'male', '2023-03-13'),
    ('Dominik', 'Matusik', 'male', '2022-05-23'),
    ('Jarosław', 'Szady', 'male', '2023-03-25'),
    ('Ernest', 'Liszka', 'male', '2023-08-25'),
    ('Antoni', 'Gałek', 'male', '2022-01-07'),
    ('Klaudiusz', 'Abramek', 'male', '2023-06-15'),
    ('Jacek', 'Piasek', 'male', '2021-05-19'),
    ('Dariusz', 'Feliks', 'male', '2024-02-22'),
    ('Konrad', 'Śliz', 'male', '2020-02-13'),
    ('Stefan', 'Bartoszuk', 'male', '2022-11-03'),
    ('Zenon', 'Sokół', 'male', '2023-02-11'),
    ('Julian', 'Szczepankiewicz', 'male', '2020-08-23'),
    ('Robert', 'Kabziński', 'male', '2024-10-11'),
    ('Jakub', 'Walecki', 'male', '2020-07-18'),
    ('Bohdan', 'Węgrzyniak', 'male', '2020-08-27'),
    ('Albert', 'Januszewski', 'male', '2021-10-15'),
    ('Kajetan', 'Breguła', 'male', '2024-02-27'),
    ('Bartłomiej', 'Wasiak', 'male', '2024-04-23'),
    ('Dawid', 'Kozak', 'male', '2021-06-11'),
    ('Zygmunt', 'Bender', 'male', '2024-08-20'),
    ('Błażej', 'Śliwa', 'male', '2020-11-10'),
    ('Fryderyk', 'Piecyk', 'male', '2023-03-22'),
    ('Jarosław', 'Shulha', 'male', '2022-11-04'),
    ('Leszek', 'Mackiewicz', 'male', '2023-05-15'),
    ('Iryna', 'Wojtkowiak', 'female', '2024-02-20'),
    ('Matylda', 'Twardowska', 'female', '2021-04-25'),
    ('Józefa', 'Osiak', 'female', '2022-02-23'),
    ('Marianna', 'Zimoń', 'female', '2022-07-22'),
    ('Żaneta', 'Trzaska', 'female', '2021-03-22'),
    ('Zdzisława', 'Dopierała', 'female', '2021-07-25'),
    ('Michalina', 'Rogalska', 'female', '2024-02-13'),
    ('Julita', 'Modrzejewska', 'female', '2024-09-12'),
    ('Grażyna', 'Skowronek', 'female', '2023-11-04'),
    ('Adriana', 'Jarka', 'female', '2021-11-19'),
    ('Pelagia', 'Matwiejczuk', 'female', '2024-10-22'),
    ('Pelagia', 'Helińska', 'female', '2021-05-13'),
    ('Lucyna', 'Łangowska', 'female', '2024-06-01'),
    ('Eliza', 'Levchenko', 'female', '2024-02-16'),
    ('Dagmara', 'Matyszewska', 'female', '2022-07-18'),
    ('Elżbieta', 'Stelmaszczyk', 'female', '2021-07-20'),
    ('Julianna', 'Milik', 'female', '2023-03-09'),
    ('Kazimiera', 'Misiarz', 'female', '2021-07-09'),
    ('Sylwia', 'Rogóż', 'female', '2022-03-18'),
    ('Liliana', 'Sushko', 'female', '2024-06-07'),
    ('Wioletta', 'Bryzek', 'female', '2020-04-13'),
    ('Patrycja', 'Stawowczyk', 'female', '2023-05-04'),
    ('Pelagia', 'Zander', 'female', '2020-08-07'),
    ('Wiesława', 'Horbatiuk', 'female', '2021-11-20'),
    ('Urszula', 'Łabaj', 'female', '2021-01-25');





INSERT INTO lesson(lesson_name, user_id, creation_date)
VALUES
    ('Food',1,'2023-01-08'),
    ('Restaurant',1,'2021-11-06'),
    ('Transport',2,'2020-05-19'),
    ('Shopping',3,'2022-03-08'),
    ('Health Care',4,'2021-06-07'),
    ('Weather',5,'2022-03-13'),
    ('School',6,'2022-10-21');


INSERT INTO user_lesson(student_id, lesson_id, join_date)
VALUES
    (1,1,'2021-01-20'),
    (1,2,'2020-01-15'),
    (1,3,'2022-09-14'),
    (1,4,'2024-07-17'),
    (2,1,'2020-07-19'),
    (2,2,'2024-11-16'),
    (2,3,'2022-08-08'),
    (2,7,'2020-09-10'),
    (3,1,'2024-04-14'),
    (3,3,'2021-02-18'),
    (3,4,'2022-10-14'),
    (3,5,'2021-01-18'),
    (4,1,'2022-03-10'),
    (4,2,'2023-01-01'),
    (4,3,'2024-02-07'),
    (4,4,'2023-11-19'),
    (4,6,'2022-05-12'),
    (5,1,'2020-08-21'),
    (5,4,'2021-01-02'),
    (5,6,'2024-02-09');

INSERT INTO wordcard(lesson_id, challenge_word, secret_word)
VALUES
    (1,'kanapka', 'sandwich'),
    (1,'ziemniak', 'potato'),
    (2,'talerz', 'plate'),
    (2,'szklanka', 'glass'),
    (3,'autobus', 'bus'),
    (3,'metro', 'subway'),
    (4,'sklep', 'shop'),
    (4,'galeria handlowa', 'shopping mall'),
    (5,'lekarz', 'doctor'),
    (5,'pielęgniarka', 'nurse'),
    (6,'deszcz', 'rain'),
    (6,'wiatr', 'wind'),
    (7,'nauczyciel', 'teacher'),
    (7,'tablica', 'board');
    
    


