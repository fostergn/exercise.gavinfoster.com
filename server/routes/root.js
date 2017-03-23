var contactsRouter = require('./contacts');

// instantiate and map routes to path
module.exports = function Routing(app, database) {
  const contactsRoutes = new contactsRouter(database);
  app.use('/api/contacts', contactsRoutes)
};