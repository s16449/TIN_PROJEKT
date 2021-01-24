function validateForm() {

    const petNameInput = document.getElementById('patientId');
    const doctorInput = document.getElementById('docId');
    
    const visitDateInput = document.getElementById('dateOf');
    const textAreaInput = document.getElementById('description');
    const visitPurposeInput = document.getElementById('purpose');

    const errorPetName = document.getElementById('errorPatName');
    const errorDoctor = document.getElementById('errorDoctor');

    const errorVisitDate = document.getElementById('errorVisitDate');
    const errorVisitPurpose = document.getElementById('errorVisitPurpose');
    const errorTextArea = document.getElementById('errorTextArea');

    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([petNameInput,  visitDateInput, doctorInput, visitPurposeInput, textAreaInput], [errorPetName,  errorVisitDate, errorDoctor, errorVisitPurpose, errorTextArea], errorsSummary);
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

 

    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate() -1,
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
    } else if (!checkTextLengthRange(visitPurposeInput.value, 2, 60)) {
        valid = false;
        visitPurposeInput.classList.add("error-input");
        errorVisitPurpose.innerText = "Pole powinno zawierać od 2 do 60 znaków";
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

