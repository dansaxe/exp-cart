var express = require('express');
var router = express.Router();
var db=require('cardb');

usr="やまだ たろう";
 
// ====== get ===============================
router.get('/cart', function(req, res, next) {
var suma=[];
var mer=[];

try{var alltmp=db.allTmp();}catch(err){console.log(err);}
try{var seltmp=db.selTmp(usr);}catch(err){console.log(err);}
console.log(alltmp);

for(var i=0;i<seltmp.length;i++){
mer.push(db.skuMer(seltmp[i].sku));
suma.push(seltmp[i].uni*mer[i].pri);
}

//console.log(mer);
//console.log(sum);
function getSum(total, num) {    return total + num;}
//var sum=suma.reduce(getSum);
res.render('cart', { 
usr:usr,
seltmp:seltmp,
mer:mer

});//rend
});//end get

module.exports = router;
