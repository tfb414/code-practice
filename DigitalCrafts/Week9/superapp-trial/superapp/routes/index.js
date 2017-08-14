var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    message: 'Hello there everyone derp derp derp'
   });
  //render is going to pull in a template, pass an object. That is where it is going to get values to populate the page
  
});

module.exports = router;
