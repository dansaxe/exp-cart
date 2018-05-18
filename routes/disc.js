var express = require('express');
var router = express.Router();

var db=require('btdb');
var allmer=db.allMer();

/* get */
router.get('/disc', function(req, res, next) {

console.log(allmer);
res.render('disc', { 
title:"disc",
usr:usr,
mer:allmer
});

});

module.exports = router;
