module.exports = function(app) {
    // automigrate for models, everytime the app will running, db will be replaced with this data.

	app.dataSources.galleryDS.automigrate('gallery', function(err) {
    if (err) throw err;
	// Simple function to create content
    app.models.Gallery.create(
        [
			{
                "name":"Bikes",
				        "image": "images/gallery/sample-moto-gallery.jpg",
				        "link": "bikes.html",
                "description":"Old and Classic Motorcycles",
                "id":"5755d253b4aa192e41a6be0f"
            },{
                "name":"Cars",
				        "image": "images/gallery/sample-car-gallery.jpg",
				        "link": "cars.html",
                "description":"Old and Classic Cars",
                "id":"5755d261b4aa192e41a6be10"
            }

		], function(err, galleries) {
            if (err) throw err;
			// Show a success msg on terminal
            console.log('Created Motorcycle Gallery Model: \n', galleries);
    });
  });

  app.dataSources.galleryDS.automigrate('bike', function(err) {
    if (err) throw err;
	// Simple function to create content
    app.models.Bike.create(
        [
            {
                "name":"Harley Davidson",
				        "image": "images/gallery/sample-moto1.jpg",
                "model":"Knucklehead",
                "category":"Custom Classic Vintage",
                "id":"5755d3afb4aa192e41a6be11",
                "galleryId":"5755d253b4aa192e41a6be0f"
            },{
                "name":"Harley Davidson",
				        "image": "images/gallery/sample-moto2.jpg",
                "model":"Rare Classic",
                "category":"Custom Classic Vintage",
                "id":"5755d3e8b4aa192e41a6be12",
                "galleryId":"5755d253b4aa192e41a6be0f"
            },{
                "name":"Old Unknown Custom Bike",
				        "image": "images/gallery/sample-moto3.jpg",
                "model":"Custom",
                "category":"Chopper",
                "id":"5755d431b4aa192e41a6be13",
                "galleryId":"5755d253b4aa192e41a6be0f"
            },{
                "name":"Shadow Macchit",
				        "image": "images/gallery/sample-car1.jpg",
                "model":"Classic",
                "category":"Old Vintage",
                "id":"5755d43eb4aa192e41a6be14",
                "galleryId":"5755d261b4aa192e41a6be10"
            },{
                "name":"Buicks",
				        "image": "images/gallery/sample-car2.jpg",
                "model":"Classic",
                "category":"Classic",
                "id":"5755d476b4aa192e41a6be15",
                "galleryId":"5755d261b4aa192e41a6be10"
            },{
                "name":"Ford",
				        "image": "images/gallery/sample-car3.jpg",
                "model":"Corsa",
                "category":"Hatch",
                "id":"5755d485b4aa192e41a6be16",
                "galleryId":"5755d261b4aa192e41a6be10"
            }

		], function(err, bikes) {
            if (err) throw err;
			// Show a success msg on terminal
            console.log('Created Bike Model: \n', bikes);
    });
  });
};
