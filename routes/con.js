var express = require('express');
var router = express.Router();

var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
// SMTPサーバーの設定
var transporter = nodemailer.createTransport(smtpTransport({
    host: "smtp.muumuu-mail.com",
    port: 465,
//    tls: true,
// webメールのログインアカウント
    auth: {
        user: "info@tmsmusic.tokyo",
        pass: "hash2010"
    }
}));
//console.dir(transporter);

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'お問い合わせ',
    });
});

router.post('/', function(req, res, next) {
// メール内容の取得
//var types = req.body.type;
var sub = req.body.sub;
var name = req.body.name;
var econtact = req.body.contact;
var message = req.body.message;

//try{
//transporter.sendcontact({
//    from: econtact,
//    // お問い合わせ受け取り先のメールアドレス
//    to: "info@tmsmusic.tokyo",
//    cc: "matsuo@tms-e.co.jp, y-nishiyama@tms-e.co.jp, aya-hashimoto@tms-e.co.jp",
//    subject: "タイトル:"+sub,
//    html:  "名前:"+name + "<br>" + "econtact:"+econtact + "<br>" + "メッセージ:"+ "<br>"+message
//    }, function(err){
//        if(err) return next(err);
//
//        console.log("お問い合わせメール送信完了");
//    //　完了ページへリダイレクト
//    res.redirect('/done');
//    });
//}catch(err){console.dir(err);}

});//post

router.get('/done', function(req, res, next) {
    res.render('done', {
        title: 'お問い合わせを受け付けました。後ほど担当の者よりご連絡させて頂きます。'
    });
});

/* GET home page. */

module.exports = router;
