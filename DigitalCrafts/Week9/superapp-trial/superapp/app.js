var express = require('express');
var path = require('path');
//path to different paths on the harddrive
var favicon = require('serve-favicon');
//serve up a favicon for you
var logger = require('morgan');
//just logs debug information
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//the two above often come with express
//handles your form / requests that come in

var index = require('./routes/index');
var users = require('./routes/users');
var facilities = require('./routes/facilities')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//concatenate together the current directory name and add it to views
app.set('view engine', 'hbs');
//we make the view engine to be handlebars, every templatating language is going to be a little bit different

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//we want to use the logger, but only when we're in the dev mode
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//this helps us read forms - I think
app.use(cookieParser());
//this keeps up with which user is associated with with session
app.use(express.static(path.join(__dirname, 'public')));
//this is saying to serve out anything in the public folder


app.use('/', index);
app.use('/users', users);
app.use('/facilities', facilities);

//asigning the variables that we added earlier


//the bit below this just acts as the middleware, it's a series of 
//functions processes it through and then can transform them

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

module.exports = app;
