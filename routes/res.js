var express = require('express');
var router = express.Router();

/* post */
router.post('/res', function(req, res, next) {

var name=req.body.name;
var sku=req.body.sku;
var pri=req.body.pri;
var img=req.body.img;
var rel=req.body.rel;
var cat=req.body.cat;
var des=req.body.des;

res.render('res', { 
title:"res"
});

});

module.exports = router;
