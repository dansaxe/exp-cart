var express = require('express');
var router = express.Router();

/* get */
router.get('/notation', function(req, res, next) {

res.render('notation', { 
title:"notification",
usr:usr
});
});

router.get('/disclaimer', function(req, res, next) {

res.render('disclaimer', { 
title:"disclaimer"
});
});
module.exports = router;
