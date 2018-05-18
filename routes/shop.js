var express = require('express');
var router = express.Router();

var db=require('btdb');
var allmer=db.allMer();
var res=[];

for(var i=0;i<allmer.length;i++){
res.push(allmer[i].name);
}
/* get */
router.get('/shop', function(req, res, next) {

//console.log(allmer);
res.render('shop', { 
title:"shop",
usr:usr,
mer:allmer
});

});

module.exports = router;
