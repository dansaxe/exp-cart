var express = require('express');
var router = express.Router();

/* get */
router.get('/ins', function(req, res, next) {

res.render('ins', { 
title:"ins",
usr:usr
});

});

module.exports = router;
