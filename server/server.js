const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 7000
const cassandra = require('cassandra-driver')
const Routing = require('./routes/root')

const database = new cassandra.Client({contactPoints: ['127.0.0.1:9042'], keyspace: 'argo_exercise'})

// configure app
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// initialize routing
Routing(app, database)

// start server
app.listen(port, () => {
	console.log(`app listening on http://localhost:${port}`)
})