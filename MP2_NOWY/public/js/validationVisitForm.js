function validateForm() {

    const petNameInput = document.getElementById('petName');
    const doctorInput = document.getElementById('doctor');
    const lastNameInput = document.getElementById('lastName');
    const visitDateInput = document.getElementById('visitDate');
    const textAreaInput = document.getElementById('textarea');
    const visitPurposeInput = document.getElementById('visitPurpose');

    const errorPetName = document.getElementById('errorPetName');
    const errorDoctor = document.getElementById('errorDoctor');
    const errorLastName = document.getElementById('errorLastName');
    const errorVisitDate = document.getElementById('errorVisitDate');
    const errorVisitPurpose = document.getElementById('errorVisitPurpose');
    const errorTextArea = document.getElementById('errorTextArea');

    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([petNameInput, lastNameInput, visitDateInput, doctorInput, visitPurposeInput, textAreaInput], [errorPetName, errorLastName, errorVisitDate, errorDoctor, errorVisitPurpose, errorTextArea], errorsSummary);
    let valid = true;

    if (!checkRequired(petNameInput.value)) {
        valid = false;
        petNameInput.classList.add("error-input");
        errorPetName.innerText = "Pole jest wymagane";
    } 

    if (!checkRequired(doctorInput.value)) {
        valid = false;
        doctorInput.classList.add("error-input");
        errorDoctor.innerText = "Pole jest wymagane";
    } 

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
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
    } 
    if (!checkRequired(visitPurposeInput.value)) {
        valid = false;
        visitPurposeInput.classList.add("error-input");
        errorVisitPurpose.innerText = "Pole jest wymagane";
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

