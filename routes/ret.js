var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ret', function(req, res, next) {
res.render('ret', { 
title: 'retrieve' 
});
});

// === post ===
router.post('/ret', function(req, res, next) {
res.render('ret', { 
title: 'retrieve' 
});
});
module.exports = router;
