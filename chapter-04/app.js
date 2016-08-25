

var express = require('express'),
  config = require('./config/config');

var app = express();

require('./config/express')(app, config);
// Get cloudinary environment configuration
require('./config/env')(app);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
