function sendMail(name,email,request,form){
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
        function (response){
            console.log("SUCCESS", response);
            form.reset();
        },
        function (error){
            console.log("ERROR", error);
        });
}

if(document.getElementById("contactForm")){
    sendMail(
        contactForm.inputName.value,
        contactForm.inputEmail.value,
        contactForm.textArea.value,
        document.getElementById("contactForm")
    )
}else{
    sendMail(
        modalContactForm.modalInputName.value,
        modalContactForm.modalInputEmail.value,
        modalContactForm.modalTextArea.value,
        document.getElementById("modalContactForm")
    )
}