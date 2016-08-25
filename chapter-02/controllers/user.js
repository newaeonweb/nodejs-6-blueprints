var models = require('../models/index');
var User = require('../models/user');

// Create Users
exports.create = function(req, res) {
    // create a new instance of the Users model with request body
    models.User.create({
        name: req.body.name,
        email: req.body.email
    }).then(function(user) {
        res.json(user);
    });
};

// List Users
exports.list = function(req, res) {
    // List all users
    models.User.findAll({}).then(function(users) {
        res.json(users);
    });
};
