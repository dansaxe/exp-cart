var express = require('express');
var router = express.Router();

var session = require('express-session');
var key={
secret: 'keyboard cat',
resave: false,
unset: 'destroy',
saveUninitialized: false,
cookie: {maxAge: 30 * 60 * 1000}
}
router.use(session(key));

/* get */
router.get('/', function(req, res, next) {

if(typeof ses !=="undefined"){
var usr=ses.usr;

console.log("usr:"+usr);
}else {usr="no usr";}
console.log("my page");

res.render('mypage', { 
title:"mypage",
usr:usr
});

});

var Database = require('better-sqlite3');
var db = new Database('public/db/pal1.db');
stm= db.prepare('select * from pal where usr=?');

// ==== POST ====
router.post('/', function(req, res, next) {

ses=req.session;
try{
var row= stm.get(req.body.usr);
console.log("db:"+row.usr);
console.log("req:"+req.body.usr);
if(row.usr==req.body.usr && row.pss==req.body.pss){
var usr=row.usr;
var pss=row.pss;
ses.usr=req.body.usr;

console.log("ses:"+ses.usr);
}else{

var usr="no usr";
}
}catch(err){
console.log(err);

var myerr=err.message;
}//catch


res.render('mypage', { 
title:usr,
usr:usr
});//rend
});//post

module.exports = router;
