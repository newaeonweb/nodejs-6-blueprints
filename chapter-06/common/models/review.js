module.exports = function(Review) {
	// Disable endpoint / methods
	Review.disableRemoteMethod("count", true);
	Review.disableRemoteMethod("exists", true);
	Review.disableRemoteMethod("findOne", true);
	Review.disableRemoteMethod('createChangeStream', true);
	Review.disableRemoteMethod("updateAll", true);

};
