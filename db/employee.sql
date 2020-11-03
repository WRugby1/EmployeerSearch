USE jobHunt_db;

CREATE TABLE employee (
    id INTEGER AUTO_INCEREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(25),
    job_title VARCHAR(25),
    salary_ceiling INTEGER(10),
    salary_floor INTEGER(10),
    location VARCHAR(25)
)