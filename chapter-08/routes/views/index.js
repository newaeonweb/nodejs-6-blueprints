var keystone = require('keystone');


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	// Add code to show posts on index
	locals.data = {
		posts: []
	};

	view.on('init', function(next) {

 		var q = keystone.list('Post').model.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.populate('author')
			.limit('4');

 		q.exec(function(err, results) {
 			locals.data.posts = results;
 			next(err);
 		});
});

	// Render the view
	view.render('index');
};
