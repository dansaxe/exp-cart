var express = require('express');
var router = express.Router();
const paypal = require('paypal-rest-sdk');
require('../routes/config');
var pal=require('pal');
var mypal=pal.myPal();
var trans=mypal.transactions[0];
var mnt=trans.amount;
var ite_a=trans.item_list.items;

var mer_a=[];
var sum=[];
var mydb=require("mydb");
//usr="fog";
if(typeof usr!=="undefined"){
title="pay";
//usr=ses.usr;
seltmp=mydb.selTmp(usr);

for(var i=0;i<seltmp.length;i++){
selmer=mydb.selMer(seltmp[i].sku);
mer_a.push(selmer);

sum.push(selmer[0].pri*seltmp[i].uni);
}

for(var i=0;i<seltmp.length;i++){
//console.log(mer_a[i]);
if(seltmp[i].uni!==0){
ite_a.push({
name:mer_a[i][0].item,
price:mer_a[i][0].pri.toString(),
quantity:seltmp[i].uni,
sku:seltmp[i].sku,
currency:"JPY"
});
console.log("uni:"+seltmp[i].uni);
}
}

//console.log(mypal);

var add= sum.reduce(function(tot,cur){
return tot+cur;
});

//console.log("add:"+add);
trans.amount.currency="JPY";
trans.amount.total=add;

//console.log(mnt);

}else{
title="not logged in";
}

// post ======================================
router.post('/', function(req, res, next) {

try{
paypal.payment.create(mypal, function (error, payment) {
if (error) {
console.log(error);
throw error.message;
} else {
for(let i = 0;i < payment.links.length;i++){
//console.log(payment.links[i]);
if(payment.links[i].rel === 'approval_url'){
res.redirect(payment.links[i].href.replace(" =","="));
//res.redirect(payment.links[i].href);
}}}});
}catch(err){console.log(err);}
    
//var json=JSON.stringify(mypal);
//res.render("pay",{
//title:title,
//mypal:json
//});//rend

});//post


module.exports = router;
