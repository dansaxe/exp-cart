var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var index = require('./routes/index');
var out = require('./routes/out');
var mypage = require('./routes/mypage');
var sig = require('./routes/sig');
var reg = require('./routes/reg');
var conf = require('./routes/conf');

var users = require('./routes/users');
var rel = require('./routes/rel');
var suc = require('./routes/suc');
var can = require('./routes/can');

// pay
var pay = require('./routes/pay');
var cart = require('./routes/cart');
var tms301 = require('./routes/tms301');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

//app.use('/login', login); 
app.use('/mypage', mypage); 
app.use('/sig', sig); 
app.use('/reg', reg); 
app.use('/conf', conf); 
//app.use('/', sessionCheck, routes); 

app.use('/users', users);

app.use('/release', rel);
app.use('/out', out);

app.use('/pay', pay);
app.use('/cart', cart);
app.use('/tms301', tms301);

app.use('/success', suc);
app.use('/cancel', can);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var ses;
var title,usr,sku,pri,uni,sum,myerr;

//var LocalStrategy = require('passport-local').Strategy;
//passport.use(new LocalStrategy(function(usr, pss, done){
//if (err) { return done(err); }
//if (!user) {
//        return done(null, false, { message: 'Incorrect username.' });
//      }
//if (!user.validPassword(password)) {
//        return done(null, false, { message: 'Incorrect password.' });
//      }
//      return done(null, user);
//    }));

// session

//var key={
//secret: 'keyboard cat',
//resave: false,
//saveUninitialized: false,
//cookie: {
//maxAge: 30 * 60 * 1000
//}
//}
//app.use(session(key));

//app.use(passport.initialize());
//app.use(passport.session());

//var sessionCheck = function(req, res, next) {
//  if (req.session.user) {
//    next();
//  } else {
//    res.redirect('/login');
//  }
//};

module.exports = app;
