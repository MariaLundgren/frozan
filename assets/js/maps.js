// this section is made with help from code instituts video lessons on google maps api and Eamonn Smyths document "How to google maps" found on code institutes slack channel
function initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15, 
                center: {
                    lat: 59.33179,
                    lng: 18.04498
                }
            });

            const myMarkers = [
                {lat: 59.33179, lng:18.04498},
                {lat: 57.70338, lng:11.97268}, 
                {lat: 55.60681, lng: 13.00025}, 
            ];

            const markers = myMarkers.map(function(myMarkers, i) {
                return new google.maps.Marker({
                    position:myMarkers,
                });
            });

            new markerCluster = new MarkerCluster(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }