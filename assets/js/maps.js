let map;

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
    adress: "<p>Scheelegatan 24, 112 28 Stockholm</p>",
    icon: "assets/images/marker.png",
  },
  {
    position: { lat: 57.70338, lng: 11.97268 },
    title: "frosan Göteborg",
    adress: "<p>Gamla Allén 2, 411 06 Göteborg</p>",
    icon: "assets/images/marker.png",
  },
  {
    position: { lat: 55.60681, lng: 13.00025 },
    title: "frozan Malmö",
    adress: "<p>Stortorget 3, 211 22 Malmö</p>",
    icon: "assets/images/marker.png",
  },
];

/**
 * Function to add marker to the map with a title, infowindow, and a custom marker from the array MY_MARKERS.
 * Adds a click function to the marker to open the infoWindow.
 */
function initiateMarker() {
  MY_MARKERS.forEach(function (myMarker) {
    let marker = new google.maps.Marker({
      position: myMarker.position,
      title: myMarker.title,
      icon: myMarker.icon,
      map: map,
    });
    // this is taken from Eamonn Smyths documet "How to google maps" found in code institutes slack channel and slightly altered to fit my project
    let infoWindow = new google.maps.InfoWindow({
      content: myMarker.adress,
    });
    // this is taken from Eamonn Smyths documet "How to google maps" found in code institutes slack channel and slightly altered to fit my project
    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  });
}

/**
 * Adds a click event listener to buttons to change the location of the map.
 */
function initialiseCityMap() {
  document.getElementById("malmoMap")
    .addEventListener("click", function (event) {
      map.panTo({ lat: 55.60681, lng: 13.00025 });
    });
  document.getElementById("goteborgMap")
    .addEventListener("click", function (event) {
      map.panTo({ lat: 57.70338, lng: 11.97268 });
    });
  document.getElementById("stockholmMap")
    .addEventListener("click", function (event) {
      map.panTo({ lat: 59.33179, lng: 18.04498 });
    });
}

/**
 * Creates a map and sets location on the map from MAP_LOCATION.
 * Calls the functions to set markers on the map and change locations with the buttons.
 */
function initMap() {
  window.onload = (event) => {
    map = new google.maps.Map(document.getElementById("map"), MAP_LOCATION);

    initiateMarker();

    initialiseCityMap();
  };
}
