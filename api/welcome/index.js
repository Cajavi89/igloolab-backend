const { Router } = require('express');

const router = Router();

router.get('/', (req,res) =>{
  res.send('Welcome to Users API Igoolab')
})

module.exports = router;
