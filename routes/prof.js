var express = require('express');
var router = express.Router();
var mydb = require('mydb');



/* get */
router.get('/profile', function(req, res, next) {

res.render('profile', { 
title:"profile",
usr:usr
});

});

module.exports = router;
