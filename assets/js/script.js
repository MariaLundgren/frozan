//get the elements I want to add animations to
const iceCreamText = document.getElementById("iceCreamText");
const aboutText = document.getElementById("aboutText");

//function to animate the text
function fadeIn() {
    //get the position of iceCreamText on the y-axis of the page
    let textPosition = iceCreamText.getBoundingClientRect().y;
};

//call the function
fadeIn();