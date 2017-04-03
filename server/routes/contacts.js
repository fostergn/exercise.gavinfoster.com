const express = require( 'express' )
router = express.Router()
cassandra = require( 'cassandra-driver' )
Uuid = cassandra.types.Uuid

module.exports = function contactsRouter( database ) {
  // get all contacts
	router.get( '/', ( req, res ) => {
		database.execute( 'SELECT * FROM argo_exercise.contacts', ( err, result ) => {
			if ( !err ) {
				res.json( result.rows )
			}	else {
				res.json( err );
			}
		})
	})

  // insert new contact
	router.post( '/', ( req, res ) => {
		const id = Uuid.random(),
			{ firstName, lastName, email, phone } = req.body,
			insertStatementValues = `${id}, '${firstName}', '${lastName}', '${email}', '${phone}'`,
			insertStatement = `
        INSERT INTO argo_exercise.contacts 
          (id, "firstName", "lastName", email, phone) 
        VALUES (${insertStatementValues});`

		database.execute( insertStatement, ( err, result ) => {
			if ( !err ) {
				res.json(
        { id, firstName, lastName, email, phone }
      )
			}	else {
				res.json( err );
			}
		})
	})

  // update existing contact
	router.put( '/:id', ( req, res ) => {
		const { firstName, lastName, email, phone } = req.body,
			id = req.params.id,
			insertStatementValues = `${id}, '${firstName}', '${lastName}', '${email}', '${phone}'`,
			updateStatement = `
      UPDATE argo_exercise.contacts
        SET 
          "firstName" = '${firstName}',
          "lastName" = '${lastName}',
          email = '${email}',
          phone = '${phone}'
        WHERE id = ${id};`

		database.execute( updateStatement, ( err, result ) => {
			if ( !err ) {
				res.json(
        { id, firstName, lastName, email, phone }
      )
			}		else {
				res.json( err );
			}
		})
	})

  // remove existing contact
	router.delete( '/:id', ( req, res ) => {
		const id = req.params.id,
			deleteStatement = `DELETE FROM argo_exercise.contacts WHERE id = ${id};`

		database.execute( deleteStatement, ( err, result ) => {
			if ( !err ) {
				res.json(
        { id }
      )
			}		else {
				res.json( err );
			}
		})
	})

  // get single contact by id
	router.get( '/:id', ( req, res ) => {
		const id = req.params.id,
			selectStatement = `SELECT * FROM argo_exercise.contacts WHERE id = ${id};`

		database.execute( selectStatement, ( err, result ) => {
			console.log( 'result: ', result.rows[ 0 ]);
			if ( !err ) {
				res.json( result.rows[ 0 ])
			}		else {
				res.json( err );
			}
		})
	})

	return router;

};
