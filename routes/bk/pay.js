var express = require('express');
var router = express.Router();
//const paypal = require('paypal-rest-sdk');
var jsonfile=require('jsonfile');

require('../routes/config');
var tmp="public/json/tmp.json";
var obj=jsonfile.readFileSync(tmp);

var trans=obj.transactions[0];
var ite=trans.item_list.items;
var mnt=trans.amount;
//mnt.total="300";
usr="fog";
if(typeof usr!=="undefined"){
//usr=ses.usr;

var obj1={};
try{
var stm=db.prepare('select * from tmp where usr=?');
var row=stm.get(usr);
var uni=row.uni;
var sku=row.sku;
obj1.quantity=uni;
obj1.sku=sku;
obj1.currency="JPY";
try{
var stm2=db.prepare('select * from mer where sku=?');
var row=stm2.get(sku);
var item=row.item;
var pri=row.pri;
obj1.name=item;
obj1.price=pri;
}catch(err){
var myerr=err;
}
}catch(err){
var myerr=err;
}

}else{
var title="not logged in";
}

ite.push(obj1);


// post
router.post('/', function(req, res, next) {

//console.dir("ite:"+ite);
res.render("pay",{
title:myerr

});

});


module.exports = router;
