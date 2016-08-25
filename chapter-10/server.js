// import modules
var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var mongoose = require('mongoose');
var passport = require('passport');
var swig = require('swig');

// Get environment variables
dotenv.load();

// Import application Controllers
var home = require('./controllers/home');
var user = require('./controllers/user');


// Passport Local strategies
require('./config/passport');

var app = express();

// database configuration
//mongoose.connect(process.env.MONGODB);
mongoose.connect('mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || process.env.MONGODB) + '/nb6');
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

// Setup View Engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views/pages'));

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
// setup public directory
app.use(express.static(path.join(__dirname, 'public')));

// application routes and handlers (Controllers)
app.get('/', home.index);
app.get('/account', user.ensureAuthenticated, user.accountGet);
app.put('/account', user.ensureAuthenticated, user.accountPut);
app.delete('/account', user.ensureAuthenticated, user.accountDelete);
app.get('/signup', user.signupGet);
app.post('/signup', user.signupPost);
app.get('/login', user.loginGet);
app.post('/login', user.loginPost);
app.get('/logout', user.logout);

// production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
