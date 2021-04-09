// this section is made from Eamonn Smyths document "How to google maps" found on code institutes slack channel and then I have added my own code to make it sutible for my project

function initMap() {
    window.onload = (event) => {
    const mapLocation = {
        zoom: 15,
        center: {
            lat: 59.33179, 
            lng: 18.04498
        }
        };

    const map = new google.maps.Map(document.getElementById("map"), mapLocation);

    const myMarkers = [
        {
            lat: 59.33179, lng: 18.04498,
            "title": "frozan Stockholm",
            "adress": "Scheelegatan 24, 112 28 Stockholm",
        },
        {
            lat: 57.70338, lng: 11.97268,
            "title": "frosan Göteborg",
            "adress": "Gamla Allén 2, 411 06 Göteborg"
        },
        {
            lat: 55.60681, lng: 13.00025,
            "title": "frozan Malmö",
            "adress":"Stortorget 3, 211 22 Malmö"
        }
    ];

    for(let i=0; i < myMarkers.length; i++) {
        const markers = new google.maps.Marker({
        position: new google.maps.LatLng(myMarkers[i], myMarkers[i]),
        map: map,
        title: myMarkers[i].title,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: myMarkers[i].adress,
    });

    markers.addListener("click", function() {
        infoWindow.open(map, markers);
    });
    }

    // change to the different cities when pressing the buttons
    const goteborgMap = document.getElementById("goteborgMap");

    goteborgMap.addEventListener("click", function(event) {
        map.setCenter(new google.maps.LatLng(57.70338, 11.97268));
    });

    const malmoMap = document.getElementById("malmoMap");

    malmoMap.addEventListener("click", function(event) {
        map.setCenter(new google.maps.LatLng(55.60681, 13.00025));
    });

    const stockholmMap = document.getElementById("stockholmMap");

    stockholmMap.addEventListener("click", function(event) {
        map.setCenter(new google.maps.LatLng(59.33179, 18.04498));
    });
};
}

initMap();