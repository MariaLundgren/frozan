var map;

const MAP_LOCATION = {
  zoom: 15,
  center: {
    lat: 59.33179,
    lng: 18.04498,
  },
};

const MY_MARKERS = [
  {
    position: { lat: 59.33179, lng: 18.04498 },
    title: "frozan Stockholm",
    adress: "Scheelegatan 24, 112 28 Stockholm",
    icon: "assets/images/marker.png",
  },
  {
    position: { lat: 57.70338, lng: 11.97268 },
    title: "frosan Göteborg",
    adress: "Gamla Allén 2, 411 06 Göteborg",
    icon: "assets/images/marker.png",
  },
  {
    position: { lat: 55.60681, lng: 13.00025 },
    title: "frozan Malmö",
    adress: "Stortorget 3, 211 22 Malmö",
    icon: "assets/images/marker.png",
  },
];

/**
 * Function to add marker to the map, with a title and a infowindow.
 * @param {Array} array of markers objects for the map. 
 */
function initiateMarker() {
  MY_MARKERS.forEach(function (myMarker) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(myMarker.position),
      title: myMarker.title,
      icon: myMarker.icon,
      map: map,
    });
    // this is taken from Eamonn Smyths documet "How to google maps" found in code institutes slack channel and slightly altered to fit my project
    var infoWindow = new google.maps.InfoWindow({
      content: myMarker.adress,
    });
    // this is taken from Eamonn Smyths documet "How to google maps" found in code institutes slack channel and slightly altered to fit my project
    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  });
}

/**
 * Adds a click event listener to a button to change the location of the map.
 * @param {}
 */
function initialiseCityMap(mapId, lat, lng) {
  document
    .getElementById("malmoMap")
    .addEventListener("click", function (event) {
      map.setCenter(new google.maps.LatLng(55.60681, 13.00025));
    });
  document
    .getElementById("goteborgMap")
    .addEventListener("click", function (event) {
      map.setCenter(new google.maps.LatLng(57.70338, 11.97268));
    });
  document
    .getElementById("stockholmMap")
    .addEventListener("click", function (event) {
      map.setCenter(new google.maps.LatLng(59.33179, 18.04498));
    });
}

/**
 * Creates a map and sets location on the map, also calls the functions to set markers on the map and change locations.
 * @param {}
 * @returns {}
 */
function initMap() {
  window.onload = (event) => {
    map = new google.maps.Map(document.getElementById("map"), MAP_LOCATION);

    initiateMarker();

    initialiseCityMap();
  };
}
