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