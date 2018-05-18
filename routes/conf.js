var express = require('express');
var router = express.Router();
var session = require('express-session');

/* post  */
router.post('/', function(req, res, next) {
var jsn=JSON.stringify(req.body);

res.render('conf', { 
title:title,
pss:pss,
err:myerr
});

});

//router.get('/', function(req, res, next) {
////console.log(req.session);
//});

module.exports = router;
