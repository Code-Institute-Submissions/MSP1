function sendMail(contactForm){

    emailjs.send("aidant842_gmail_com", "portfolio", {
        "from_name": contactForm.inputName.value,
        "from_email": contactForm.inputEmail.value,
        "project_request": contactForm.textArea.value
    
})
    .then(
        function(response){
            console.log("SUCCESS", response);
            document.getElementById("contactForm").reset();
        },
        function(error) {
            console.log("ERROR", error);
        
        });
        return false;
}

function sendMail(contactForm){

    emailjs.send("aidant842_gmail_com", "portfolio", {
        "from_name": contactForm.modalInputName.value,
        "from_email": contactForm.modalInputEmail.value,
        "project_request": contactForm.modalTextArea.value
    
})
    .then(
        function(response){
            console.log("SUCCESS", response);
            document.getElementById("modalContactForm").reset();
        },
        function(error) {
            console.log("ERROR", error);
        
        });
        return false;
}