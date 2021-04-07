
const navHome = document.getElementById("navHome")

navHome.addEventListener("click", function(event) {
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
});

const navAbout = document.getElementById("navAbout")

navAbout.addEventListener("click", function(event) {
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
});

const navIceCream = document.getElementById("navIceCream")

navIceCream.addEventListener("click", function(event) {
    document.getElementById("iceCream").scrollIntoView({behavior:"smooth"});
});

const navLocations = document.getElementById("navLocations")

navLocations.addEventListener("click", function(event) {
    document.getElementById("locations").scrollIntoView({behavior:"smooth"});
});

const navContact = document.getElementById("navContact")

navContact.addEventListener("click", function(event) {
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});