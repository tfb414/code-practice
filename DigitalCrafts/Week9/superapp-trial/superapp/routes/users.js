var express = require('express');
var router = express.Router();

const db = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query(`
    select * from cd.members;
  `).then((result)=>{
    res.render('users', { 
      layout: "layout",
      title: 'Users',
      user: result
     });
  }).catch(console.log);

});

router.get('/:id', function(req, res, next) {
  db.one(`
      select * from cd.members where memid=${req.params.id};
  `).then((result)=>{
      console.log(result);
      res.render('user', {
          user: result,
          title: "User"
      });
      
  }).catch(console.log);
});

router.get('/:id/edit', function(req, res, next) {
  db.one(`
      select * from cd.members where memid=${req.params.id};
  `).then((result)=>{
      console.log(Object.keys(result));
      res.render('editprofile', {
          user: [result],
          title: "User",
      });
      
  }).catch(console.log);
});

router.post('/:id/edit', function(req, res, next) {
  db.one(`
      update cd.members 
        set
          surname='${req.body.surname}'
        where memid=${req.params.id}

  `).then((result)=>{
      res.render('editprofile', {
          user: [result],
          title: "User",
      });
      
  }).catch(console.log);
});

module.exports = router;
