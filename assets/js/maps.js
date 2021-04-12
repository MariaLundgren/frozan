// this section down to the buttons that change locations is made from Cone Institutes video lessons on Google Maps API and 
// Eamonn Smyths document "How to google maps" found on code institutes slack channel and custonized it to make it suit my project

var map; 

const mapLocation = {
    zoom: 15,
    center: {
        lat: 59.33179, 
        lng: 18.04498
    }
    };

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

const icon = "assets/images/marker.png"


function initMap() {
    window.onload = (event) => {

    map = new google.maps.Map(document.getElementById("map"), mapLocation);
    
    for(let i=0; i < myMarkers.length; i++) {
        const markers = new google.maps.Marker({
        position: new google.maps.LatLng(myMarkers[i], myMarkers[i]),
        map: map,
        title: myMarkers[i].title,
        icon,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: myMarkers[i].adress,
    });

    markers.addListener("click", function() {
        infoWindow.open(map, markers);
    });
    }

    function initialiseCityMap() {
        document.getElementById("malmoMap").addEventListener("click", function(event) {
            map.setCenter(new google.maps.LatLng(55.60681, 13.00025));
        }); 
        document.getElementById("goteborgMap").addEventListener("click", function(event) {
            map.setCenter(new google.maps.LatLng(57.70338, 11.97268));
        });
        document.getElementById("stockholmMap").addEventListener("click", function(event) {
            map.setCenter(new google.maps.LatLng(59.33179, 18.04498));
        });      
    }

    initialiseCityMap("malmoMap",55.60681, 13.00025)
    initialiseCityMap("goteborgMap",55.60681, 13.00025)
    initialiseCityMap("stockholmMap",55.60681, 13.00025)
    
   
};
}