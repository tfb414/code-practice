var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('facilities', { 
    title: 'Facilities',
    message: 'We in facilities'
   });
});

module.exports = router;
