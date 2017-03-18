// dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

// configure app

// set routes
app.use(require('./app/routes'));

// start server
app.listen(port, () => {
	console.log(`app listening on http://localhost:${port}`)
})