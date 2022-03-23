const users = require('./api/user')
const welcome = require('./api/welcome')

function routes(app){
  app.use('/', welcome)
  app.use('/api/users', users)
}

module.exports = routes;
