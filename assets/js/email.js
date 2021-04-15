/**
 * Shows modal when submitting contact form and adds click function to modal button to be able to close modal.
 */
function showModal() {
  document.getElementById("modal-background").style.display = "block";
}

document.getElementById("modal-button").addEventListener("click", function () { 
  document.getElementById("modal-background").style.display = "none";
});

/**
 * section taken from code institute lessons on emailj js and customized to my project. 
 * Sends email from customers using information from contact form.
 * @param {object} contactForm containing form data.
 * @returns {boolean} Always false to prevent form submission.
 */
function sendMail(contactForm) {
    emailjs.send("service_nj2gh0e", "frozan", {
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        message: contactForm.message.value,
      })
      .then(
        function (response) {
          console.log("success", response);
          document.getElementById("myForm").reset();
          showModal();
          document.getElementById("modalText").innerHTML =
            "Thank you for your message! <br> We usually respond within 48 hours on weekdays.";
        },
        function (error) {
          console.log("failed", error);
          showModal();
          document.getElementById("modalText").innerHTML =
            "Something went wrong! Please try again later.";
        }
      );
    return false;
}
