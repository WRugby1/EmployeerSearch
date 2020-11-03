USE jobHunt_db;

CREATE TABLE employer (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    company_name VARCHAR(25) NOT NULL,
    job_title VARCHAR(25) NOT NULL,
    industry VARCHAR(25) NOT NULL,
    location VARCHAR(25) NOT NULL,
    salary INTEGER(10)
);
