function validateForm() {

    const patNameInput = document.getElementById('patName');
    const firstNameInput = document.getElementById('ownerFirstName');
    const lastNameInput = document.getElementById('ownerLastName');
    const speciesInput = document.getElementById('species');
    const sexInput = document.getElementById('sex');
    const ageInput = document.getElementById('age');
    const phoneInput = document.getElementById('phone');

    const errorPatName = document.getElementById('errorPatName');
    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorSpecies = document.getElementById('errorSpecies');
    const errorSex = document.getElementById('errorSex');
    const errorAge = document.getElementById('errorAge');
    const errorPhone = document.getElementById('errorPhone');

    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([firstNameInput, lastNameInput, patNameInput, speciesInput, sexInput, ageInput, phoneInput], [errorFirstName, errorLastName, errorPatName, errorSpecies, errorSex, errorAge, errorPhone], errorsSummary);
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


    if (!checkRequired(patNameInput.value)) {
        valid = false;
        patNameInput.classList.add("error-input");
        errorPatName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(patNameInput.value, 2, 60)) {
        valid = false;
        patNameInput.classList.add("error-input");
        errorPatName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    } 

    if (!checkRequired(speciesInput.value)) {
        valid = false;
        speciesInput.classList.add("error-input");
        errorSpecies.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(speciesInput.value, 2, 60)) {
        valid = false;
        speciesInput.classList.add("error-input");
        errorSpecies.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }



    if (!checkRequired(sexInput.value)) {
        valid = false;
        sexInput.classList.add("error-input");
        errorSex.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(sexInput.value, 2, 60)) {
        valid = false;
        sexInput.classList.add("error-input");
        errorSex.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(ageInput.value)) {
        valid = false;
        ageInput.classList.add("error-input");
        errorAge.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(ageInput.value,2,60)) {
        valid = false;
        ageInput.classList.add("error-input");
        errorAge.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }


    if (!checkRequired(phoneInput.value)) {
        valid = false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(phoneInput.value, 2, 60)) {
        valid = false;
        phoneInput.classList.add("error-input");
        errorPhone.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}

