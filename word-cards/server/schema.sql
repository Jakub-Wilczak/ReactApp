DROP DATABASE IF EXISTS `wordcards_dev`;
CREATE DATABASE `wordcards_dev`;
USE `wordcards_dev`;

CREATE TABLE student (
                         student_id INT NOT NULL AUTO_INCREMENT,
                         first_name VARCHAR(50),
                         last_name VARCHAR(50),
                         age INT,
                         gender VARCHAR(6),
                         birth_date DATE,
                         PRIMARY KEY (student_id)
);

CREATE TABLE teacher (
                         teacher_id INT NOT NULL AUTO_INCREMENT,
                         first_name VARCHAR(50) NOT NULL,
                         last_name VARCHAR(50) NOT NULL,
                         age INT,
                         gender VARCHAR(6),
                         birth_date DATE,
                         PRIMARY KEY (teacher_id)
);


CREATE TABLE lesson (
                        lesson_id INT NOT NULL AUTO_INCREMENT,
                        lesson_name VARCHAR(50) NOT NULL,
                        teacher_id INT NOT NULL,
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


CREATE TABLE student_lesson(
                               student_id INT NOT NULL,
                               lesson_id INT NOT NULL,
                               join_date DATE,
                               PRIMARY KEY(student_id,lesson_id)
);


INSERT INTO student (first_name, last_name, age, gender, birth_date)
VALUES
    ('Jakub', 'Wilczak', 24, 'Male','2000-07-23'),
    ('Zuzanna', 'Mętrak', 24, 'Female', '2000-01-27'),
    ('Tomek', 'Mędrek', 40, 'Male', '1984-5-30'),
    ('Alek', 'Jędrzejczyk', 15, 'Male', '2009-08-10'),
    ('James', 'Ackerman',46, 'Male', '1978-11-27');



INSERT INTO teacher (first_name, last_name, age, gender, birth_date)
VALUES
    ('Alek', 'Włodarczyk', 75, 'Female', '1950-01-01'),
    ('Weronika', 'Mądrala', 64, 'Male', '1960-02-7'),
    ('Monika', 'Wilusz', 54, 'Male', '1970-05-10'),
    ('Ania', 'Machaj', 44, 'Male', '1980-03-2'),
    ('Michalina', 'Stworek', 34, 'Male', '1990-06-10'),
    ('Andrzej', 'Smoła', 24, 'Male', '2000-07-27');


INSERT INTO lesson(lesson_name, teacher_id, creation_date)
VALUES
    ('Food',1,'2023-01-08'),
    ('Restaurant',1,'2021-11-06'),
    ('Transport',2,'2020-05-19'),
    ('Shopping',3,'2022-03-08'),
    ('Health Care',4,'2021-06-07'),
    ('Weather',5,'2022-03-13'),
    ('School',6,'2022-10-21');


INSERT INTO student_lesson(student_id, lesson_id, join_date)
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
    
    


