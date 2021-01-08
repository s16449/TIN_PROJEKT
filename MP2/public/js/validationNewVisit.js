function validateForm() {

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const visitDateInput = document.getElementById('visitDate');
    const textAreaInput = document.getElementById('textarea');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorVisitDate = document.getElementById('errorVisitDate');
    const errorTextArea = document.getElementById('errorTextArea');

    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([firstNameInput, lastNameInput,visitDateInput,textAreaInput], [errorFirstName, errorLastName,errorVisitDate,errorTextArea], errorsSummary);
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

    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    const nowString = [year, month, day].join('-');
    
    if (!checkRequired(visitDateInput.value)) {
        valid = false;
        visitDateInput.classList.add("error-input");
        errorVisitDate.innerText = "Pole jest wymagane";
    } else if (!checkDate(visitDateInput.value)) {
        valid = false;
        visitDateInput.classList.add("error-input");
        errorVisitDate.innerText = "Pole powinno zawierać datę w formacie yyyy-MM-dd (np. 2000-01-01)";
    } else if (checkDateIfBefore(visitDateInput.value, nowString)) {
        valid = false;
        visitDateInput.classList.add("error-input");
        errorVisitDate.innerText = "Nie mozna zapisac wizyty wstecz";
    } else if (checkRequired(visitDateInput.value) && checkDate(visitDateInput.value)
        && !checkDateIfAfter(visitDateInput.value, visitDateInput.value)) {
        //jeśli data od oraz data do jest poprawna, sprawdzamy kolejność dat
        valid = false;
        visitDateInput.classList.add("error-input");
        errorVisitDate.innerText = "Data do powinna być późniejsza niż data od";
    }
    
    if (!checkRequired(textAreaInput.value)) {
        valid = false;
        textAreaInput.classList.add("error-input");
        errorTextArea.innerText = "Pole jest wymagane";
    
    }
    



    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;

}

