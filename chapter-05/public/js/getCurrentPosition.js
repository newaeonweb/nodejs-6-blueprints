function getCurrentPosition() {

    // Check boreswer/navigator support
    if (navigator.geolocation) {
        var options = {
            enableHighAccuracy : true,
            timeout : Infinity,
            maximumAge : 0
        };

        navigator.geolocation.watchPosition(getUserPosition, trackError, options);

    } else {
        alert('Ops; Geolocation is not supported');
    }
	// Get user position and place a icon on map
    function getUserPosition(position) {
		// Check longitude and latitude
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);

		// Create the user' coordinates
        var googlePos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
            zoom : 12,
            center : googlePos,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };

        // Set a variable to get the HTML div
        var mapObj = document.getElementById('map');
        // Create the map and passing: map div and map options
        var googleMap = new google.maps.Map(mapObj, mapOptions);
        // Setup a marker on map with user' location
        var markerOption = {
            map : googleMap,
            position : googlePos,
            animation : google.maps.Animation.DROP
        };

		// Create a instance with marker on map
        var googleMarker = new google.maps.Marker(markerOption);
        // Get the user's complete address information using the Geocoder Google API
		var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'latLng' : googlePos
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    var popOpts = {
                        content : results[1].formatted_address,
                        position : googlePos
                    };
                    // Setup an info window with user information
                    var popup = new google.maps.InfoWindow(popOpts);
                    google.maps.event.addListener(googleMarker, 'click', function() {
                        popup.open(googleMap);
                    });
                } else {
                    alert('No results found');
                }
            } else {
                alert('Uhh, failed: ' + status);
            }
        });
    }
    // Setup a error function
    function trackError(error) {
        var err = document.getElementById('map');
        switch(error.code) {
            case error.PERMISSION_DENIED:
            err.innerHTML = "User denied Geolocation.";
            break;
            case error.POSITION_UNAVAILABLE:
            err.innerHTML = "Information is unavailable.";
            break;
            case error.TIMEOUT:
            err.innerHTML = "Location timed out.";
            break;
            case error.UNKNOWN_ERROR:
            err.innerHTML = "An unknown error.";
            break;
        }
    }
}

getCurrentPosition();
