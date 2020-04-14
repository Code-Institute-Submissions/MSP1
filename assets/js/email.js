/* check if fully loaded */
$(document).ready(function () {
    /* declare function sendMail with parameters */
    function sendMail(name, email, request, form) {
        emailjs.send(
            "aidant842_gmail_com",
            "portfolio",
            {
                "from_name": name,
                "from_email": email,
                "project_request": request
            }
        )

            .then(
                function (response) {
                    console.log("SUCCESS", response);
                    form.reset();
                },
                function (error) {
                    console.log("ERROR", error);
                });
    }
    /* execute on submit of main contact form with correspoding arguments */
    document.getElementById("contactForm").onsubmit = function () {
        sendMail(
            contactForm.inputName.value,
            contactForm.inputEmail.value,
            contactForm.textArea.value,
            document.getElementById("contactForm")
        )
        return false;
    };
    /* execute on submit of modal contact form with correspoding arguments */
    document.getElementById("modalContactForm").onsubmit = function () {
        sendMail(
            modalContactForm.modalInputName.value,
            modalContactForm.modalInputEmail.value,
            modalContactForm.modalTextArea.value,
            document.getElementById("modalContactForm")
        )
        return false;
    };
});
