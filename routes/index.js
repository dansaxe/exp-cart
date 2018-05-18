var express = require('express');
var router = express.Router();
//var session = require('express-session');

/* GET home page. */
//var ses;
//usr="fog";
router.get('/', function(req, res, next) {
//var ses=req.session;
if(typeof usr!=='undefined'){
//usr=ses.usr;
//console.log("usr:"+usr);
}else{
var usr="no usr";
//console.log(usr);
}
res.render('index', { 
title:"top",
usr:usr
});

});

module.exports = router;
