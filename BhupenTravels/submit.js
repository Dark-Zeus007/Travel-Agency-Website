function submitForm(contactForm) {

    // Initializes SDK
    (function(){
            emailjs.init("user_ewAp2WLr4rekNLnkVnUvN");
        })();
        
    // Stores user input entered into contact form
    var formDetails = {
        "fullname": contactForm.fullname.value,
        "emailaddress": contactForm.emailaddress.value,
        "comments": contactForm.comments.value,
        "dates": contactForm.date.value,
        "days": contactForm.days.value
    };

    // Connects to email service to send form with info entered by user
    emailjs.send("gmail", "theatre_travels", formDetails)
    .then(
        //Styles button and resets form after successfully sending form
        function(response) {
            alert("Thankyou for your information", response);
            document.getElementById("contact-btn").classList.replace("form-btn", "form-btn-sent");
            document.getElementById("contact-btn").innerHTML="Sent!";
            document.getElementById("contact-form").reset();
            console.log("Thankyou for your information", response);
        },
        // Alerts the user if form failed to send
        function(error) {
            alert("Form failed to submit. \r\n Response:\n " + JSON.stringify(err));
            console.log("Failed", error);
        });

    return false;
}