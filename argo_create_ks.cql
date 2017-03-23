CREATE  KEYSPACE IF NOT EXISTS argo_exercise
WITH durable_writes = true
AND replication = {'class': 'SimpleStrategy', 'replication_factor' : 3}; 

USE argo_exercise;

CREATE TABLE IF NOT EXISTS contacts (
	id uuid PRIMARY KEY,
	first_name text,
	last_name text,
	email text, 
	phone_number text
);