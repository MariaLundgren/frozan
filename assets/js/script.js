
//function to animate the text
function fadeIn(){
    //get the position of iceCreamText on the y-axis of the page
    let textPosition1 = document.querySelector(".aboutText").getBoundingClientRect().y;
    let textPosition2 = document.querySelector(".iceCreamText").getBoundingClientRect().y;
    // set how far we scrolled on page 
    let scrolled = window.pageYOffset;
    // if scrolled is larger or equal to text position add active class
    if (scrolled >= textPosition1) {
        document.querySelector(".aboutText").classList.add("animation");
    }
    if (scrolled >= textPosition2) {
        document.querySelector(".iceCreamText").classList.add("animation");
    }
};



window.addEventListener("DOMContentLoaded", (event) => {
window.addEventListener("scroll",fadeIn)
});
