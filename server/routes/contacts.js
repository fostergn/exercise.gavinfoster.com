var express = require('express')
var router = express.Router()
const cassandra = require('cassandra-driver')
const Uuid = cassandra.types.Uuid

module.exports = function contactsRouter(database) {
  // get all contacts
  router.get('/', (req, res) => {
    database.execute('SELECT * FROM argo_exercise.contacts', (err, result) => {
      if(!err) { res.json(result.rows)} 
      else { 
          res.json(err);
      }
    })
  })

  // insert new contact
  router.post('/', (req, res) => {
    const { firstName, lastName, email, phone } = req.body
    const insertStatementValues = `${Uuid.random()}, '${firstName}', '${lastName}', '${email}', '${phone}'`;
    const insertStatement = `
      INSERT INTO argo_exercise.contacts 
        (id, first_name, last_name, email, phone_number) 
      VALUES (${insertStatementValues});`
      
    database.execute(insertStatement, (err, result) => {
      if(!err) { res.json(result)} 
      else { 
          res.json(err);
      }
    })
  })

  // update existing contact
  router.put('/:id', (req,res) => {
    const { firstName, lastName, email, phone } = req.body
    const id = req.params.id
    const insertStatementValues = `${id}, '${firstName}', '${lastName}', '${email}', '${phone}'`;
    const updateStatement = `
      UPDATE argo_exercise.contacts
        SET 
          first_name = '${firstName}',
          last_name = '${lastName}',
          email = '${email}',
          phone_number = '${phone}'
        WHERE id = ${id};`

    database.execute(updateStatement, (err, result) => {
      if(!err) { res.json(result)} 
      else { 
          res.json(err);
      }
    })
  })

  // remove existing contact
  router.delete('/:id', (req,res) => {
    const id = req.params.id
    const deleteStatement = `DELETE FROM argo_exercise.contacts WHERE id = ${id};`

    database.execute(deleteStatement, (err, result) => {
      if(!err) { res.json(result)} 
      else { 
          res.json(err);
      }
    })
  })

  // get single contact by id
  router.get('/:id', (req, res) => {
    const id = req.params.id
    const selectStatement = `SELECT * FROM argo_exercise.contacts WHERE id = ${id};`

    database.execute(selectStatement, (err, result) => {
      console.log('result: ', result.rows[0]);
      if(!err) { res.json(result.rows[0])} 
      else { 
          res.json(err);
      }
    })
  })

  return router;

};