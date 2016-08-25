// Import Express and Router
var express = require('express');
var router = express.Router();

// Get
router.get('/', function(req, res) {
  res.render('index', {
	  title: 'Socket.io chat application',
	  lead: 'Insert your user name and start talk'
  });
});

module.exports = router;
