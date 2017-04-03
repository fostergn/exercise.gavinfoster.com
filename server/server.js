const express = require( 'express' )
app = express()
bodyParser = require( 'body-parser' )
path = require( 'path' )
cassandra = require( 'cassandra-driver' )
database = new cassandra.Client({ contactPoints: [ '127.0.0.1:9042' ], keyspace: 'argo_exercise' })
Routing = require( './routes/root' )
port = process.env.PORT || 80

// configure app
app.use(( req, res, next ) => {
	res.header( 'Access-Control-Allow-Origin', '*' )
	res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE' )
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' )
	next();
});
app.use( bodyParser.urlencoded({ extended: true }))
app.use( bodyParser.json())
app.use( express.static( path.join( __dirname )))

// initialize routing
Routing( app, database )

// start server
app.listen( port, () => {
	console.log( `app listening on http://localhost:${port}` )
})
