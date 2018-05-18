var express = require('express');
var router = express.Router();
var db=require('cardb');

//usr="fog";

// ====== get ===============================
router.get('/cart', function(req, res, next) {
var suma=[];
var mer=[];

usr="やまだ たろう";

try{var seltmp=db.selTmp(usr);}catch(err){console.log(err);}

for(var i=0;i<seltmp.length;i++){
mer.push(db.skuMer(seltmp[i].sku));
suma.push(seltmp[i].uni*mer[i].pri);
}

//console.log(mer);
function getSum(total, num) {return total + num;}
var sum=suma.reduce(getSum);
console.log(sum);

res.render('cart', { 
usr:usr,
seltmp:seltmp,
sum:sum,
mer:mer

});//rend
});//end get

module.exports = router;
