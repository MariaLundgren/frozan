// this section is made from Eamonn Smyths document "How to google maps" found on code institutes slack channel and then I have added my own code to make it sutible for my project
function myMap() {
    const mapLocation = {
        zoom: 15,
        center: {
            lat: 59.33179, 
            lng: 18.04498
        }
        };

    const map = new google.maps.Map(document.getElementById("map"), mapLocation);

    const myMarkers = [
        {lat: 59.33179, lng:18.04498},
        {lat: 57.70338, lng:11.97268}, 
        {lat: 55.60681, lng: 13.00025}, 
    ];

    for(let i=0; i < myMarkers.length; i++) {
        const markers = new google.maps.Marker({position: myMarkers[i]}); 
        markers.setMap(map);
    }
}

myMap()