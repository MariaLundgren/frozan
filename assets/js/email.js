
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
            document.getElementById("sent").innerHTML = `
            Thank you for your message! We usually reply within 48 hours on weekdays.`; 
        }, 
        function(error) {
            console.log("failed", error);
        });
        return false;
}