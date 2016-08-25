// Show home screen
exports.show = function(req, res) {
	// Render home screen
	res.render('index', {
		title: 'Multimedia Application',
		callToAction: 'An easy way to upload and manipulate files with Node.js'
	});
};
