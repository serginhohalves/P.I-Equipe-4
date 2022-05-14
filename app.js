var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const fs = require('fs')



var indexRouter = require('./routes/index');
var users = require('./routes/users');
let produtos = require('./routes/produtos');
const erroMiddleware = require('./middleware/erroMiddleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
	  resave: true,
	  saveUninitialized: true,
	  secret: 'palavraSecreta',
	  cookie: {maxAge: 100 * 60 * 60 * 24}
	})
  )
app.use(cookieParser())



app.use('/', indexRouter);
app.use('/users', users);
app.use('/produtos', produtos)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(erroMiddleware)

module.exports = app;
