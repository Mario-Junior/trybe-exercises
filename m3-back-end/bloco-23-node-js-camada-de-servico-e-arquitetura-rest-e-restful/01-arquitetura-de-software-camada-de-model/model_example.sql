DROP DATABASE IF EXISTS model_example;

CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE authors
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	middle_name VARCHAR(30),
	last_name VARCHAR(30) NOT NULL,
	birthday DATE,
	nationality VARCHAR(100),
	PRIMARY KEY(id)
);

CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(90) NOT NULL,
	author_id INT(11) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (author_id) REFERENCES authors (id)
);

CREATE TABLE IF NOT EXISTS contacts (
  author_id INT NOT NULL,
  contact VARCHAR(15),
  FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO authors (first_name,middle_name,last_name,birthday,nationality)
VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
	('J.','R. R.','Tolkien','1892-01-03','britânico'),
	('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
	('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
	('Júlio',NULL,'Verne','1905-03-24','francês');

INSERT INTO books (title, author_id)
VALUES
	('A Game of Thrones', 1),
	('A Clash of Kings', 1),
	('A Storm of Swords', 1),
	('The Lord of The Rings - The Fellowship of the Ring', 2),
	('The Lord of The Rings - The Two Towers', 2),
	('The Lord of The Rings - The Return of The King', 2),
	('Foundation', 3);
    
INSERT INTO contacts (author_id, contact)
VALUES
	(1, '+553499999-9911'),
    (1, '+553499999-9912'),
    (2, '+553499999-9992'),
    (3, '+553499999-9931'),
    (3, '+553499999-9932'),
    (4, '+553499999-9994'),
    (5, '+553499999-9951'),
    (5, '+553499999-9952');