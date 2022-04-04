const form = document.querySelector("#form");
const inputDefault = document.querySelectorAll(".input-default");
const buttonTest = document.querySelector(".button-test");
const buttonRegister = document.querySelector(".button-register");

const inputName = document.forms["form"]["input-name"];
const inputLastName = document.forms["form"]["input-last-name"];
const inputEmail = document.forms["form"]["input-email"];
const inputPassword = document.forms["form"]["input-password"];

buttonTest.addEventListener("click", function() {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
    });

    const spanRegister = buttonTest.nextSibling.nextSibling;
    spanRegister.innerText = "Register!"
    spanRegister.classList.add("input-message-register");

    setTimeout(function() {
        spanRegister.innerText = "";
        spanRegister.classList.remove("input-message-register")
    }, 5000);
});

buttonRegister.addEventListener("click", function() {
    form.onsubmit = function(e) {
        e.preventDefault();

        inputName.addEventListener("keyup", function() {
            if(!inputName.value) {
                hasError = true;
    
                inputName.placeholder = " ";
                inputName.classList.add("input-default-error");
    
                const spanError = inputName.nextSibling.nextSibling;
                spanError.innerText = "First Name cannot be empty";
            } else {
                inputName.placeholder = "First Name";
                inputName.classList.remove("input-default-error");
                
                const spanError = inputName.nextSibling.nextSibling;
                spanError.innerText = "";
            }
        });

        inputLastName.addEventListener("keyup", function() {
            if(!inputLastName.value) {
                hasError = true;
    
                inputLastName.placeholder = " ";
                inputLastName.classList.add("input-default-error");
    
                const spanError = inputLastName.nextSibling.nextSibling;
                spanError.innerText = "Last Name cannot be empty";
            } else {
                inputLastName.placeholder = "Last Name";
                inputLastName.classList.remove("input-default-error");
    
                const spanError = inputLastName.nextSibling.nextSibling;
                spanError.innerText = "";
            }
        });

        inputEmail.addEventListener("keyup", function() {
            if(!inputEmail.value) {
                hasError = true;
    
                inputEmail.placeholder = "email@example/com";
                inputEmail.classList.add("input-default-error");
    
                const spanError = inputEmail.nextSibling.nextSibling;
                spanError.innerText = "Looks like this is not on email";
            } else {
                inputEmail.placeholder = "Email Address";
                inputEmail.classList.remove("input-default-error");
    
                const spanError = inputEmail.nextSibling.nextSibling;
                spanError.innerText = "";
            }
        });

        inputPassword.addEventListener("keyup", function() {
            if(!inputPassword.value) {
                hasError = true;
    
                inputPassword.placeholder = " ";
                inputPassword.classList.add("input-default-error");
    
                const spanError = inputPassword.nextSibling.nextSibling;
                spanError.innerText = "Password cannot be empty";
            } else {
                inputPassword.placeholder = "Password";
                inputPassword.classList.remove("input-default-error");
    
                const spanError = inputPassword.nextSibling.nextSibling;
                spanError.innerText = "";
            }
        });
  

        let hasError = false;

        if(!inputName.value) {
            hasError = true;

            inputName.placeholder = " ";
            inputName.classList.add("input-default-error");

            const spanError = inputName.nextSibling.nextSibling;
            spanError.innerText = "First Name cannot be empty";
        } else {
            inputName.placeholder = "First Name";
            inputName.classList.remove("input-default-error");
            
            const spanError = inputName.nextSibling.nextSibling;
            spanError.innerText = "";
        }

        if(!inputLastName.value) {
            hasError = true;

            inputLastName.placeholder = " ";
            inputLastName.classList.add("input-default-error");

            const spanError = inputLastName.nextSibling.nextSibling;
            spanError.innerText = "Last Name cannot be empty";
        } else {
            inputLastName.placeholder = "Last Name";
            inputLastName.classList.remove("input-default-error");

            const spanError = inputLastName.nextSibling.nextSibling;
            spanError.innerText = "";
        }

        if(!inputEmail.value) {
            hasError = true;

            inputEmail.placeholder = "email@example/com";
            inputEmail.classList.add("input-default-error");

            const spanError = inputEmail.nextSibling.nextSibling;
            spanError.innerText = "Looks like this is not on email";
        } else {
            inputEmail.placeholder = "Email Address";
            inputEmail.classList.remove("input-default-error");

            const spanError = inputEmail.nextSibling.nextSibling;
            spanError.innerText = "";
        }

        if(!inputPassword.value) {
            hasError = true;

            inputPassword.placeholder = " ";
            inputPassword.classList.add("input-default-error");

            const spanError = inputPassword.nextSibling.nextSibling;
            spanError.innerText = "Password cannot be empty";
        } else {
            inputPassword.placeholder = "Password";
            inputPassword.classList.remove("input-default-error");

            const spanError = inputPassword.nextSibling.nextSibling;
            spanError.innerText = "";
        }

        if(!hasError) {
            form.submit();
        }
    }
});

