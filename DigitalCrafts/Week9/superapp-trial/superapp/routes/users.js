var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { 
    title: 'Dis be users',
    message: 'We in users'
   });
});

module.exports = router;
