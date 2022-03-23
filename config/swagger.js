const path = require('path')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const { version } = require('../package.json')

const routesApi = path.join(__dirname, '../api/**/index.js')

const options = {
  definition:{
    openapi:'3.0.0',
    info:{
      title:'Users API',
      version,
      description: 'API Description',
      license:{
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/'
      },
      contact:{
        name:'Carlos Jaramillo',
        url: 'https://www.linkedin.com/in/cajavi89/',
        email: 'cajavi89@gmail.com'
      }
    },
    servers:[
      {
        url:'http://localhost:8080'
      },
      {
        url:'https://igoolab-backend.herokuapp.com/'
      }
    ]
  },
  apis:[routesApi]
}

const swaggerSpecs = swaggerJsDoc(options);

function swaggerDocs(app, port){
  //swaggerPage
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

  //docs in JSON Format
  app.get('/docs.json',(req,res)=>{
    res.setHeader('content-type', 'application/json');
    res.send(swaggerSpecs)
  });

  console.log(`Docs available at http://localhost:${port}/docs`)
}
module.exports = swaggerDocs

