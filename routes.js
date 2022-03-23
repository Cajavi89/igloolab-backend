const users = require('./api/user')

function routes(app){
  // app.use('/',(req,res)=>{res.send('Welcome to my users Backend')})
  app.use('/api/users', users)
}

module.exports = routes;
