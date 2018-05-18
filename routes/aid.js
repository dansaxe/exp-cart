var express = require('express');
var router = express.Router();

var db=require('cardb');
var adb=require('aidb');
// 
var aid=require('aidy');
var taid=aid.tmpAid();

var usr="やまだ たろう";
var phn="0801234567";

var selusr=adb.selUsr(usr);
var phnusr=adb.phnUsr(phn);
var phnadr=adb.phnAdr(phn);

// === buy
taid.buyer.email=phnusr.email;
taid.buyer.name1=phnusr.usr;
taid.buyer.name2=phnusr.kat;
taid.buyer.phone=phnusr.phn;
// buy dat
taid.buyer_data.age=Date.now();
taid.buyer_data.age=Date.now();
taid.buyer_data.last_order_at=Date.now();

// adr
taid.shipping_address.zip=phnadr.zip;
taid.shipping_address.state=phnadr.sta;
taid.shipping_address.city=phnadr.city;
taid.shipping_address.line1=phnadr.ln1;
taid.shipping_address.line2=phnadr.ln2;
// === tmp
try{var seltmp=db.selTmp(usr);}catch(err){console.log(err);}
var suma=[];
var mer=[];
var ite=taid.order.items;
var obj={id:0,quantity:0};
var arr=[];
//arr.push(obj);

for(var i=0;i<seltmp.length;i++){
mer.push(db.skuMer(seltmp[i].sku));
suma.push(seltmp[i].uni*mer[i].pri);
//console.log(seltmp[i].sku);
// add items
ite[i]={id:seltmp[i].sku,
quantity:seltmp[i].uni,
title:mer[i].name,
unit_price:mer[i].pri
}
}

//console.log(ite);

//console.log(mer);
function getSum(total, num) {return total + num;}
if(suma){var sum=suma.reduce(getSum);}

taid.amount=sum;

// === get ===
router.get('/aid', function(req, res, next) {

console.log(taid);
var fs = require('fs');

var str=JSON.stringify(taid);
var pid="pay_WvLwQE4AAFQAfg46";
var url="https://api.paidy.com/payments/"+pid;
var sec="sk_test_qbmquibktb7s3n4dov1mdihod3";
var pub="pk_test_pvve8rdmjtcqbjejq4idolh8l9";
var lnk="http://localhost:3002/cart";

//console.log(str);
var load="var config={\"api_key\":\""+pub+"\",\"closed\":"+
" function(cb) {var xhr = new XMLHttpRequest();xhr.open(\"POST\",\""+lnk+"\" , true);"+
"xhr.setRequestHeader('Content-Type', 'application/json');"+
"var str = JSON.stringify(cb);console.log(str);xhr.send(str);}};"+
"var hand=Paidy.configure(config);"+
"function paidyPay(){var load="+str+";hand.launch(load);};";

fs.writeFile("public/son/load.js", load, function(err) {
if(err) {return console.log(err);    }
console.log("The file was saved!");
}); 
}); 


// === post ===
router.post('/aid', function(req, res, next) {

res.render('aid', { 
title:"aid",
usr:usr,
taid:taid
});
});

module.exports = router;
