var createError = require('http-errors');
var express = require('express');
const router = express.Router();//$$$$$$$$
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const serverless = require("serverless-http"); //wraps express app so it can be used as a serverless function


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signUpOneRouter = require('./routes/signUp-1');
var signUpTwoRouter = require('./routes/signUp-2');
var mapRouter = require('./routes/map');
var homeRouter = require('./routes/home');

if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', signUpOneRouter);
app.use('/users', usersRouter);
app.use('/signUp-1', signUpOneRouter);
app.use('/signUp-2', signUpTwoRouter);
app.use('/map',mapRouter);
app.use('/home',homeRouter);
app.use(`/.netlify/functions/api`,router);//$$$$$$ */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
module.exports = app;
module.exports.handler = serverless(app);  ///$$$$$$$$$ 
