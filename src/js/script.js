const formulario = document.querySelector("#formulario");
const inputPadrao = document.querySelectorAll(".input-padrao");
const buttonTeste = document.querySelector(".button-teste");
const buttonCadastro = document.querySelector(".button-cadastro");

const inputName = document.forms["formulario"]["input-name"];
const inputLastName = document.forms["formulario"]["input-last-name"];
const inputEmail = document.forms["formulario"]["input-email"];
const inputPassword = document.forms["formulario"]["input-password"];

buttonTeste.addEventListener("click", function() {
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        
    });

    const spanCadastro = buttonTeste.nextSibling.nextSibling;
    spanCadastro.innerText = "Register!"
    spanCadastro.classList.add("input-mensagem-cadastro");

    setTimeout(function() {
        spanCadastro.innerText = "";
        spanCadastro.classList.remove("input-mensagem-cadastro")
    }, 5000);
});

buttonCadastro.addEventListener("click", function() {
    formulario.onsubmit = function(e) {
        e.preventDefault();

        inputName.addEventListener("keyup", function() {
            if(!inputName.value) {
                temErro = true;
    
                inputName.placeholder = " ";
                inputName.classList.add("input-padrao-erro");
    
                const spanErro = inputName.nextSibling.nextSibling;
                spanErro.innerText = "First Name cannot be empty";
            } else {
                inputName.placeholder = "First Name";
                inputName.classList.remove("input-padrao-erro");
                
                const spanErro = inputName.nextSibling.nextSibling;
                spanErro.innerText = "";
            }
        });

        inputLastName.addEventListener("keyup", function() {
            if(!inputLastName.value) {
                temErro = true;
    
                inputLastName.placeholder = " ";
                inputLastName.classList.add("input-padrao-erro");
    
                const spanErro = inputLastName.nextSibling.nextSibling;
                spanErro.innerText = "Last Name cannot be empty";
            } else {
                inputLastName.placeholder = "Last Name";
                inputLastName.classList.remove("input-padrao-erro");
    
                const spanErro = inputLastName.nextSibling.nextSibling;
                spanErro.innerText = "";
            }
        });

        inputEmail.addEventListener("keyup", function() {
            if(!inputEmail.value) {
                temErro = true;
    
                inputEmail.placeholder = "email@example/com";
                inputEmail.classList.add("input-padrao-erro");
    
                const spanErro = inputEmail.nextSibling.nextSibling;
                spanErro.innerText = "Looks like this is not on email";
            } else {
                inputEmail.placeholder = "Email Address";
                inputEmail.classList.remove("input-padrao-erro");
    
                const spanErro = inputEmail.nextSibling.nextSibling;
                spanErro.innerText = "";
            }
        });

        inputPassword.addEventListener("keyup", function() {
            if(!inputPassword.value) {
                temErro = true;
    
                inputPassword.placeholder = " ";
                inputPassword.classList.add("input-padrao-erro");
    
                const spanErro = inputPassword.nextSibling.nextSibling;
                spanErro.innerText = "Password cannot be empty";
            } else {
                inputPassword.placeholder = "Password";
                inputPassword.classList.remove("input-padrao-erro");
    
                const spanErro = inputPassword.nextSibling.nextSibling;
                spanErro.innerText = "";
            }
        });
  

        let temErro = false;

        if(!inputName.value) {
            temErro = true;

            inputName.placeholder = " ";
            inputName.classList.add("input-padrao-erro");

            const spanErro = inputName.nextSibling.nextSibling;
            spanErro.innerText = "First Name cannot be empty";
        } else {
            inputName.placeholder = "First Name";
            inputName.classList.remove("input-padrao-erro");
            
            const spanErro = inputName.nextSibling.nextSibling;
            spanErro.innerText = "";
        }

        if(!inputLastName.value) {
            temErro = true;

            inputLastName.placeholder = " ";
            inputLastName.classList.add("input-padrao-erro");

            const spanErro = inputLastName.nextSibling.nextSibling;
            spanErro.innerText = "Last Name cannot be empty";
        } else {
            inputLastName.placeholder = "Last Name";
            inputLastName.classList.remove("input-padrao-erro");

            const spanErro = inputLastName.nextSibling.nextSibling;
            spanErro.innerText = "";
        }

        if(!inputEmail.value) {
            temErro = true;

            inputEmail.placeholder = "email@example/com";
            inputEmail.classList.add("input-padrao-erro");

            const spanErro = inputEmail.nextSibling.nextSibling;
            spanErro.innerText = "Looks like this is not on email";
        } else {
            inputEmail.placeholder = "Email Address";
            inputEmail.classList.remove("input-padrao-erro");

            const spanErro = inputEmail.nextSibling.nextSibling;
            spanErro.innerText = "";
        }

        if(!inputPassword.value) {
            temErro = true;

            inputPassword.placeholder = " ";
            inputPassword.classList.add("input-padrao-erro");

            const spanErro = inputPassword.nextSibling.nextSibling;
            spanErro.innerText = "Password cannot be empty";
        } else {
            inputPassword.placeholder = "Password";
            inputPassword.classList.remove("input-padrao-erro");

            const spanErro = inputPassword.nextSibling.nextSibling;
            spanErro.innerText = "";
        }

        if(!temErro) {
            formulario.submit();
        }
    }
});

