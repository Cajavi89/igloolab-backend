const users = require('./api/user')

function routes(app){
  app.use('/api/users', users)
}

module.exports = routes;
