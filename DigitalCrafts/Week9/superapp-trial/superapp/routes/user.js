var express = require('express');
var router = express.Router();

const db = require('../db')

router.get('/:id', function(req, res, next) {
    db.one(`
        select * from cd.members where memid=${req.params.id};
    `).then((result)=>{
        console.log(result);
        res.render('user', {
            layout: 'layout',
            user: result,
            title: "User"
        });
        
    }).catch(console.log);
});