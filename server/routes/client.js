var express = require('express')
var router = express.Router()
var path = require('path')

module.exports = function clientRouter() {
  // get all contacts
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
  })

  return router;

};