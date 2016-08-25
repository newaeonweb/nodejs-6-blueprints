module.exports = function(app) {
    // automigrate for models, everytime the app will running, db will be replaced with this data.

	app.dataSources.motorcycleDataSource.automigrate('motorcycle', function(err) {
    if (err) throw err;
	// Simple function to create content
    app.models.Motorcycle.create(
        [
			{
				"make": "Harley Davidson",
				"image": "images/heritage.jpg",
				"model": "Heritage Softail",
				"description": "An Evolution V-twin Engine!",
				"category": "Cruiser",
				"year": "1986",
				"id": "57337088fabe969f2dd4078e"
			}

		], function(err, motorcycles) {
            if (err) throw err;
			// Show a success msg on terminal
            console.log('Created Motorcycle Model: \n', motorcycles);
    });
  });

  app.dataSources.motorcycleDataSource.automigrate('review', function(err) {
    if (err) throw err;
	// Simple function to create content
    app.models.Review.create(
        [
			{
				"name": "Jax Teller",
				"email": "jax@soa.com",
				"id": "57337b82e630a9152ed6554d",
				"review": "I love the Engine and sound",
				"ObjectId": "57337088fabe969f2dd4078e"
			},
			{
    			"name": "Filip Chibs Telford",
    			"email": "chibs@soa.com",
    			"review": "Emblematic motorcycle of the world",
    			"id": "5733845b00f4a48b2edd54cd",
    			"ObjectId": "57337088fabe969f2dd4078e"
  			},
			{
				"name": "Clay Morrow",
				"email": "clay@soa.com",
				"review": "A classic for the eighties, i love the engine sound",
				"id": "5733845b00f4a48b2edd54ef",
				"ObjectId": "57337088fabe969f2dd4078e"
			}

		], function(err, reviews) {
            if (err) throw err;
			// Show a success msg on terminal
            console.log('Created Review Model: \n', reviews);
    });
  });
};
