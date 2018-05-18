var express = require('express');
var router = express.Router();
var Database = require('better-sqlite3');
var db = new Database('public/dat/db/my.db');

var aid=require('aidy');
var pid="pay_WvLwQE4AAFQAfg46";
var url="https://api.paidy.com/payments/"+pid;
var sec="sk_test_qbmquibktb7s3n4dov1mdihod3";

var usr="やまだ たろう";

// === post ===
router.post('/add', function(req, res, next) {
var sku=req.body.sku;
var pri=req.body.pri;

res.render('add', { 
title:"add",
usr:usr,
sku:sku,
pri:pri
});
});

module.exports = router;
