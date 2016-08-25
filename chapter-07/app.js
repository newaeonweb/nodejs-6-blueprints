// Node dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Setup application routes
var routes = require('./routes/index');

// Create a Express application
var app = express();

// Defining the env variable process for development
var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// Setup view engine to use EJS (Embeded JavaScript)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncommented this line to use a favicon in your application
// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setup all routes to listen on routes file (this came from routes variable)
app.use('/', routes);

// Setup a  404 error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Print the error stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// No stacktraces on production
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});

module.exports = app;
// Exports all the application configuration

app.set('port', process.env.PORT || 3000);

// Setup the server port and give a user message
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

// Starting with socket.io
var io = require('socket.io').listen(server);
// Create an Array to hold users
var userList = [];
// Create an Array to hold connections
var connections = [];

// Start connection listener
io.sockets.on('connection', function (socket) {
  connections.push(socket);
  console.log("Connected:", connections.length );

// Setup Disconnect user
  socket.on('disconnect', function (data) {
    if (socket.username) {
      userList.splice(userList.indexOf(socket.username), 1);
      updateUsernames();
    }
    connections.splice(connections.indexOf(socket), 1);
    console.log("Disconnected:" , connections.length );
  });

  // Setup new messages
  socket.on('send message', function (data) {
    io.sockets.emit('new message', { msg: data, user: socket.username });
  });

  // New User
    socket.on('new user', function (data, callback) {
      callback(!!data);
      socket.username = data;
      userList.push(socket.username);
      updateUsernames();
  });

    function updateUsernames() {
      io.sockets.emit('get userList', userList);
    }
});
