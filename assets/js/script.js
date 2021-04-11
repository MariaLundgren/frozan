
//get the elements I want to add animations to
const iceCreamText = document.querySelector(".iceCreamText");
const aboutText = document.querySelector(".aboutText");

//function to animate the text
function fadeIn(){
    //get the position of iceCreamText on the y-axis of the page
    let textPosition1 = aboutText.getBoundingClientRect().y;
    let textPosition2 = iceCreamText.getBoundingClientRect().y;
    // set how far we scrolled on page 
    let scrolled = window.pageYOffset;
    // if scrolled is larger or equal to text position add active class
    if (scrolled >= textPosition1) {
        aboutText.classList.add("animation");
    }
    if (scrolled >= textPosition2) {
        iceCreamText.classList.add("animation");
    }
};


window.addEventListener("scroll",fadeIn);

