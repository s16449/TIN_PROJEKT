function validateForm() {

    const formName = document.getElementById("formMode");
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const specializationInput = document.getElementById('specialization');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorSpecialization = document.getElementById('errorSpecialization');
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('password');


    const errorsSummary = document.getElementById('errorsSummary');
    /*alert("ssdsd");*/
    resetErrors([firstNameInput, lastNameInput, passwordInput, emailInput, specializationInput], [errorFirstName, errorLastName, errorPassword, errorEmail, errorSpecialization], errorsSummary);
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

    if (!checkRequired(specializationInput.value)) {
        valid = false;
        specializationInput.classList.add("error-input");
        errorSpecialization.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(specializationInput.value, 2, 60)) {
        valid = false;
        specializationInput.classList.add("error-input");
        errorSpecialization.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(passwordInput.value, 5, 60)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "Pole powinno zawierać mminimum 5 znaków";
    }


    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    if (valid) {
        alert("Lekarz dodany/edytowany pomyślnie");
    }


    return valid;
}

