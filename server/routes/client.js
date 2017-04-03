const express = require( 'express' )
router = express.Router()
path = require( 'path' )

module.exports = function clientRouter() {
  // get all contacts
	router.get( '*', ( req, res ) => {
		res.sendFile( path.join( __dirname + '/../index.html' ));
	})

	return router;

};
