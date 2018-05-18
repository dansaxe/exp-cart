var express = require('express');
var router = express.Router();

// == sess =============================
var session = require('express-session');
var key={
secret: 'keyboard cat',
resave: false,
saveUninitialized: false,
cookie: {
secure:false,
maxAge: 30 * 60 * 1000
}
}
router.use(session(key));
// == sess =============================

// == db =============================
var db=require('btdb');
var allmer=db.allMer();
var allaid=db.allAid();

// ====== get ===============================
router.get('/detail', function(req, res, next) {
var usr="fog";
console.log(allaid);
res.render('detail', { 
title:"rel",
usr:usr,
arr:allmer
});//rend
});//get
// ====== post ===============================
router.post('/detail', function(req, res, next) {

var db=require('btdb');
//var usr="fog";
var stm;
var id=req.body.id;
try{db.updAid(id,usr);}catch(err){console.log(err);    }
    
try{var all=db.allAid(usr);}catch(err){console.log(err);}

console.log(id);
console.log(sel);

res.send(id);
});//post

module.exports = router;
