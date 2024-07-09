document.getElementById('gps-button').addEventListener('click', function() {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Get the user's latitude and longitude
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // You can use these coordinates to find farmers near the user's location
            // For this example, we'll just display the coordinates
            var resultElement = document.getElementById('result');
            resultElement.innerHTML = `Your Location: Latitude ${latitude}, Longitude ${longitude}`;
        });
    } else {
        alert('Geolocation is not available in your browser. Please enable it to use this feature.');
    }
});
