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

app.get('/api/contacts/:id', (req, res) => {
  const reqId = req.params.id;

  let contact = contacts.filter(contact => {
    return contact.id == reqId;
  });

  res.json(contact[0])
})

// start server
app.listen(port, () => {
	console.log(`app listening on http://localhost:${port}`)
})