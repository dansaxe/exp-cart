var express = require('express');
var router = express.Router();
const paypal = require('paypal-rest-sdk');

paypal.configure({
'mode': 'sandbox', //sandbox or live
'client_id': 'AcRzUqKVc52MjXwttJAq3-6rirhl0jqWE0j5rVmwlf_l1Nf8yoNvAaygL3b8znQcm9f63hFzPTqWtso-',
'client_secret':'EL805GY8lIoLFzcG26ca149pqSegPzIy0F0vh4gqxq9GdxHe7Zb76FCyIdnwMNdoGKrhWSd_FwoqOPpo' 
});


router.get('/', function(req, res, next) {
//const payerId = req.query.PayerID;
//const paymentId = req.query.paymentId;

const execute_payment_json = {
"payer_id": payerId,
"transactions": [{
"amount": {
"currency": "JPY",
"total": "300"
}
}]
};

paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
if (error) {
////console.log(typeof error.response.name);
res.redirect("/index");
//console.log(error.response);
throw error;
} else {
var str=JSON.stringify(payment);
//console.log(JSON.stringify(payment));
res.render('success',{
title: 'ご購入ありがとうございました。',
    pid:payerId,
    payid:paymentId


});
}
});
});


module.exports = router;
