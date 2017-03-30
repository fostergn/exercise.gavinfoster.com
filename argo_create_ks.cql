CREATE  KEYSPACE IF NOT EXISTS argo_exercise
WITH durable_writes = true
AND replication = {'class': 'SimpleStrategy', 'replication_factor' : 3}; 

USE argo_exercise;

CREATE TABLE IF NOT EXISTS contacts (
	id uuid PRIMARY KEY,
	"firstName" text,
	"lastName" text,
	"email" text, 
	"phone" text
);

// insert test user
INSERT INTO argo_exercise.contacts (id, email, "firstName", "lastName", phone)
VALUES (5b6962dd-3f90-4c93-8f61-eabfa4a803e2, 'gavinnfoster@gmail.com', 'Gavin', 'Foster', '7032548467');