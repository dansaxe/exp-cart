var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('reg', { 
title: 'sign up' 
});//rend
});//get


// ==== POST ====
//router.post('/', function(req, res, next) {
//res.render('reg', { 
//title: 'registered'
//});//rend
//});//post

module.exports = router;
