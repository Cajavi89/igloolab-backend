const express = require('express');
const cors = require('cors');

function initApp(app){
  app.use(express.json());
  app.use(cors());
}

module.exports = initApp;
