function validateForm() {
   
    const petName = document.getElementById('pet-name');
    const petSex = document.getElementById('sex');
    const petSpecies = document.getElementById('species');
   // const petBreed = document.getElementById('breed');
    //const petAge = document.getElementById('age');
    const petOwnerId = document.getElementById('ownerId');

    const errorName = document.getElementById('errorName');
    const errorSex = document.getElementById('errorSex');
    const errorSpecies = document.getElementById('errorSpecies');
   // const errorBreed = document.getElementById('errorBreed');
    //const errorAge = document.getElementById('errorAge');
    const errorOwnerId = document.getElementById('errorOwnerId');

    const errorsSummary = document.getElementById('errorsSummary');


    resetErrors([petName, petSex, petSpecies, petOwnerId],
        [errorName, errorSex, errorSpecies, errorOwnerId], errorsSummary);
    let valid = true;

    if (!checkRequired(petName.value)) {
        valid = false;
        petName.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(petSex.value)) {
        valid = false;
        petSex.classList.add("error-input");
        errorSex.innerText = "Pole jest wymagane";
    }
    

    if (!checkRequired(petSpecies.value)) {
        valid = false;
        petSpecies.classList.add("error-input");
        errorSpecies.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(petOwnerId.value)) {
        valid = false;
        petOwnerId.classList.add("error-input");
        errorOwnerId.innerText = "Pole jest wymagane";
    }


    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}