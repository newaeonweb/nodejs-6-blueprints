var keystone = require('keystone');


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';

	// Add code to show posts on index
	locals.data = {
		abouts: []
	};

	view.on('init', function(next) {

 		var q = keystone.list('About').model.find()
			.limit('1');

 		q.exec(function(err, results) {
 			locals.data.abouts = results;
 			next(err);
 		});
});

	// Render the view
	view.render('about');
};
