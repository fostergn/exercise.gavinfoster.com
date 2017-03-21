CREATE  KEYSPACE IF NOT EXISTS argo_contact_list
WITH durable_writes = true
AND replication = {'class': 'SimpleStrategy', 'replication_factor' : 3}; 

USE argo_contact_list;

CREATE TABLE IF NOT EXISTS contacts (
	userid uuid PRIMARY KEY,
	first_name text,
	last_name text,
	email text, 
	phone_number text
);