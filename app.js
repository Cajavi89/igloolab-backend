const express = require('express');
const expressConfig= require('./config/express')

const routes = require('./routes');

const app = express();

expressConfig(app);

const PORT = process.env.PORT;

//start server
app.listen(PORT, ()=>{

  //routes
  routes(app)

  //message all running well.
  console.log(`Server Runing at http://localhost:${PORT}`)
});

module.exportr = app;
