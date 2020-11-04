DROP DATABASE IF EXISTS jobHunt_db;
CREATE DATABASE jobHunt_db;
USE jobHunt_db;

CREATE TABLE employer (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    company_name VARCHAR(25) NOT NULL,
    job_title VARCHAR(25) NOT NULL,
    industry VARCHAR(25) NOT NULL,
    location VARCHAR(25) NOT NULL,
    salary INTEGER(10)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(25),
    job_title VARCHAR(25),
    salary_ceiling INTEGER(10),
    salary_floor INTEGER(10),
    location VARCHAR(25)
);