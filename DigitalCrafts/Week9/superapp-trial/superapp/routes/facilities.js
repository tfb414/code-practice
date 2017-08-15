const express = require('express');
const router = express.Router();

const db = require('../db')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    db.one(`
        select * from cd.facilities where facid=${req.params.id};
    `).then((result)=>{
        
        res.render('facilities', {
            facility: result,
            title: "Facilities"
        });
        
    }).catch(console.log);
});

module.exports = router;


