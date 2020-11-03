USE jobHunt_db;

CREATE TABLE login(
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    email VARCHAR(20),
    password VARCHAR(25),
    category VARCHAR(10),
)