var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var i18n=require("i18n-express");
//var webhook = require('express-webhook');
// route =================================
var index = require('./routes/index');
//var out = require('./routes/out');
var news = require('./routes/news');
var info = require('./routes/info');
var prof = require('./routes/prof');
var sch = require('./routes/sch');
var vid = require('./routes/vid');
var med = require('./routes/med');
//var con = require('./routes/con');
var mail = require('./routes/mail');

// shop =================================
var disc = require('./routes/disc');
var detail = require('./routes/detail');
var shop = require('./routes/shop');
var cart = require('./routes/cart');
var add = require('./routes/add');
var aid = require('./routes/aid');
var ins = require('./routes/ins');
var res = require('./routes/res');

// login =================================
var sig = require('./routes/sig');
var reg = require('./routes/reg');
var conf = require('./routes/conf');

var rel = require('./routes/rel');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use =================================
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// i18n ======================================
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
  siteLangs: ["en","ja"],
  textsVarName: 'trans'
}));
// i18n ======================================
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n/news'), // <--- use here. Specify translations files path.
  siteLangs: ["en","ja"],
  textsVarName: 'news'
}));

// i18n ======================================
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n/profile'), // <--- use here. Specify translations files path.
  siteLangs: ["en","ja"],
  textsVarName: 'profile'
}));

// i18n ======================================
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n/disc'), // <--- use here. Specify translations files path.
  siteLangs: ["en","ja"],
  textsVarName: 'disc'
}));

// i18n ======================================
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n/shop'), // <--- use here. Specify translations files path.
  siteLangs: ["en","ja"],
  textsVarName: 'shop'
}));

// i18n ======================================
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n/schedule'), // <--- use here. Specify translations files path.
  siteLangs: ["en","ja"],
  textsVarName: 'schedule'
}));
// i18n ======================================
app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n/video'), // <--- use here. Specify translations files path.
  siteLangs: ["en","ja"],
  textsVarName: 'video'
}));
// use route =================================
app.use('/', index);
app.use('/', disc);
app.use('/', detail);
app.use('/', news);
app.use('/', info);
app.use('/', prof);
// === shop ===
app.use('/', shop);
app.use('/', add);

app.use('/', aid);

app.use('/', ins);
app.use('/', res);
app.use('/', cart);

app.use('/', sch);
app.use('/', vid);
app.use('/', med);
//app.use('/', con);
app.use('/', mail);
// use route =================================
app.use('/reg', reg);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//var ses,usr,title,sku,nam,pri,uni,sum,myerr;

module.exports = app;
