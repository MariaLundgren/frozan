//get the elements I want to add animations to
const iceCreamText = document.getElementById("iceCreamText");

//function to animate the text
function fadeIn(){
    //get the position of iceCreamText on the y-axis of the page
    let textPosition = iceCreamText.getBoundingClientRect().y;
    // set how far we scrolled on page 
    let scrolled = window.pageYOffset;
    // if scrolled is larger or equal to text position add active class
    if (scrolled >= textPosition) {
        iceCreamText.classList.add("active");
    }
};


window.addEventListener("scroll",fadeIn);

