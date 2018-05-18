var express = require('express');
var router = express.Router();
var pid="pay_WvLwQE4AAFQAfg46";
var url="https://api.paidy.com/payments/"+pid;
var sec="sk_test_qbmquibktb7s3n4dov1mdihod3";

var db=require('cardb');
var usr="やまだ たろう";

// === post ===
router.post('/add', function(req, res, next) {
var sku=req.body.sku;
var uni=req.body.uni;
if(sku){var skumer=db.skuMer(sku);}

var seltmp=db.selTmp(usr);
//console.log(seltmp);

var asku=[];
var ind;
var isku=parseInt(sku);
for(var i=0;i<seltmp.length;i++){
asku.push(seltmp[i].sku);
ind=    asku.indexOf(isku);

if(ind=="-1"){db.insTmp(usr,sku,uni);}else{
db.updTmp(uni,usr,sku);}//if

}//for

console.log("ind:"+ind);

//seltmp=db.selTmp(usr);
//for(var i=0;i<seltmp.length;i++){    console.log("tmp: "+seltmp[i].sku);}

try{var usrtmp=db.usrTmp(usr,sku);}catch(err){console.log(err);}
//console.log(usrtmp);

res.render('add', { 
title:"add",
usr:usr,
sku:sku,
skutmp:usrtmp,
skumer:skumer
});
});

module.exports = router;
