var contactsRouter = require('./contacts')
var clientRouter = require('./client')

// instantiate and map routes to path
module.exports = function Routing(app, database) {
  const clientRoutes = new clientRouter(database)
  const contactsRoutes = new contactsRouter(database)
  app.use('/api/contacts', contactsRoutes)
  app.use('/', clientRoutes)
};