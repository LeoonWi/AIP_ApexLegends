var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/apexlegends')
var mysql2 = require('mysql2/promise');
var session = require('express-session')
//var MongoStore = require('connect-mongo');(session);
var MySQLStore = require('express-mysql-session')(session);
//var Legend = require("./models/legend").Legend

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var legendsRouter = require('./routes/legends');

var app = express();

var options = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '2003',
    database: 'apexlegends'
};
var connection = mysql2.createPool(options)
var sessionStore = new MySQLStore(options, connection);

// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

/* app.use(session (
    {
        secret: "ApexLegends",
        cookie: {maxAge: 60 * 1000},
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({mongoUrl: 'mongodb://127.0.0.1:27017/apexlegends'})
    }
)) */

app.use(session (
    {
        secret: 'ApexLegends',
        key: 'sid',
        store: sessionStore,
        resave: true,
        saveUninitialized: true,
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 60*1000
        }
    }
));

app.use(function(req, res, next) {
    req.session.counter = req.session.counter +1 || 1
    next()
})

/* app.use(function(req, res, next) {
    res.locals.nav = []

    Legend.find({}, {_id: 0, title: 1, nick: 1}, function(err, result) {
        if(err) throw err
        res.locals.nav = result
        next()
    })
}) */

app.use(require("./middleware/createMenu.js"))
app.use(require("./middleware/createUser.js"))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/legends', legendsRouter);

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
  res.render('error', {title: "Oops"});
});

module.exports = app;
