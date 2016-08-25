// get gravatar icon from email
var gravatar = require('gravatar');
// get Comments model
var Comments = require('../models/comments');

// List Comments
exports.list = function(req, res) {
	// List all comments and sort by Date
    Comments.find().sort('-created').populate('user', 'local.email').exec(function(error, comments) {
        if (error) {
            return res.send(400, {
                message: error
            });
        }
        // Render result
        res.render('comments', {
            title: 'Comments Page',
            comments: comments,
            gravatar: gravatar.url(comments.email ,  {s: '80', r: 'x', d: 'retro'}, true)
        });
    });
};
// Create Comments
exports.create = function(req, res) {
	// create a new instance of the Comments model with request body
    var comments = new Comments(req.body);
    // Set current user (id)
    comments.user = req.user;
    // save the data received
    comments.save(function(error) {
        if (error) {
            return res.send(400, {
                message: error
            });
        }
        // Redirect to comments
        res.redirect('/comments');
    });
};
// Comments authorization middleware
exports.hasAuthorization = function(req, res, next) {
	if (req.isAuthenticated())
        return next();
    res.redirect('/login');
};
