var express = require('express');
var router = express.Router();

/* get */
router.get('/info', function(req, res, next) {

res.render('info', { 
title:"info",
usr:usr
});
});

router.get('/notation', function(req, res, next) {

res.render('notation', { 
title:"notation",
usr:usr
});
});

router.get('/disclaimer', function(req, res, next) {

res.render('disclaimer', { 
title:"disclaimer"
});
});

module.exports = router;
