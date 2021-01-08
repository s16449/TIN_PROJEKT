function validateForm() {

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorEmail = document.getElementById('errorEmail');
    const errorLogin = document.getElementById('errorLogin');
    const errorPassword = document.getElementById('errorPassword');
    const errorPhone = document.getElementById('errorPhone');

    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([firstNameInput, lastNameInput, emailInput, loginInput, passwordInput, phoneInput], [errorFirstName, errorLastName, errorEmail, errorLogin, errorPassword, errorPhone], errorsSummary);
    let valid = true;

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawierać od 2 do 60 znaków";

    }


    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }

    if (!checkRequired(loginInput.value)) {
        valid = false;
        loginInput.classList.add("error-input");
        errorLogin.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(loginInput.value, 2, 60)) {
        valid = false;
        loginInput.classList.add("error-input");
        errorLogin.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }



    if (!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(passwordInput.value, 2, 60)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(phoneInput.value)) {
        valid = false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(phoneInput.value, 9, 11)) {
        valid = false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText = "Pole powinno zawierać od 9 do 11 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}

