'use strict';

const contacts = require('./data.js');

// dependencies
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 8080;

// configure app
app.use(bodyParser.urlencoded({ extended: true }));

// set routes
app.use(require('./app/routes'));

app.get('/api/contacts', (req, res) => {
  if(!contacts) {
    res.status(404).json({ message: 'No contacts found!'})
  }
  res.json(contacts);
})

app.post('/api/contacts', (req, res) => {

  const contact = {
    id: contacts.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }

  contacts.push(contact);
  res.json(contact);
})

app.put('/api/contacts/:id', (req,res) => {
  const reqId = req.params.id;

  // get the contact that matches the one in the param
  let contact = contacts.filter(contact => {
    return contact.id.toString() === reqId;
  })[0];

  // get the index of that contact in ur array
  const index = contacts.indexOf(contact);
  const keys = Object.keys(req.body);

  // for each key thats changes update the key in the contact
  keys.forEach(key => {
    contact[key] = req.body[key];
  });

  contacts[index] = contact;

  res.json(contacts[index]);
})

app.delete('/api/contacts/:id', (req,res) => {
  const reqId = req.params.id;
  
  // get the contact that matches the one in the param
  let contact = contacts.filter(contact => {
    return contact.id.toString() === reqId;
  })[0];

  // get the index of that contact in ur array
  const index = contacts.indexOf(contact);

  contacts.splice(index, 1);

  res.json({ message: `User ${reqId} was deleted.`})
})

app.get('/api/contacts/:id', (req, res) => {
  const reqId = req.params.id;

  let contact = contacts.filter(contact => {
    return contact.id.toString() === reqId;
  });

  if(!contact) {
    res.status(404).json({ message: 'No contact found' });
  }

  res.json(contact[0])
})

// start server
app.listen(port, () => {
	console.log(`app listening on http://localhost:${port}`)
})