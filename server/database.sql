CREATE DATABASE Pern;

CREATE TABLE MemeCategories(
  category_id SERIAL PRIMARY KEY,
  title VARCHAR(255)
);

CREATE TABLE USERS(
    id SERIAL PRIMARY KEY,
    userName VARCHAR,
    email VARCHAR
);

CREATE TABLE MEMESTORAGE(
  id SERIAL PRIMARY KEY,
  src VARCHAR,
  category VARCHAR,
  parent_id INT REFERENCES MemeCategories (category_id)
);