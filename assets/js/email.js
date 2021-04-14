const MODAL = document.getElementById("modal-background");
const MODAL_TEXT = document.getElementById("modalText");

function showModal() {
    MODAL.style.display = "block";
}

document.getElementById("modal-button").addEventListener("click", function() {
    MODAL.style.display = "none";
});

// section taken from code institute lessons on emailj js and customized to my project 
function sendMail(contactForm) { 
    emailjs.send("service_nj2gh0e", "frozan", {
        "from_name":contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("success", response);
            document.getElementById("myForm").reset();
            showModal();
            MODAL_TEXT.innerHTML = "Thank you for your message! <br> We usually respond within 48 hours on weekdays.";
        }, 
        function(error) {
            console.log("failed", error);
            showModal();
            MODAL_TEXT.innerHTML = "Something went wrong! Please try again later.";
        });
        return false;
}