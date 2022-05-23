DROP DATABASE IF EXISTS clients_data;
CREATE DATABASE IF NOT EXISTS clients_data;
USE clients_data;

CREATE TABLE IF NOT EXISTS clients (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

INSERT INTO clients (nome)
VALUES
	('Alexandre'),
    ('Gabriel'),
    ('Jéssica'),
    ('Kelly'),
    ('Mário'),
    ('Michelle'),
    ('Rafael');
SELECT * FROM clients;