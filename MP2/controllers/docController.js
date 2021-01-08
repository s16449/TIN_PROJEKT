
const VisitRepository = require('../repository/sequelize/VisitRepository');
const PatientRepository = require('../repository/sequelize/PatientRepository');

exports.showMyPanel = (req, res, next) => {
    VisitRepository.getVisits()
        .then(vis => {
            console.log(vis);
            res.render('pages/doc', {
                vis: vis,
                navLocation: 'doc'
            });
        });


}

// exports.showPatients = (req, res, next) => {
//     PatientRepository.showPatients()
//         .then(pat => {
//             console.log(vis);
//             res.render('pages/doctors', {
//                 pat: pat,
//                 navLocation: 'docs'
//             });
//         });
// }

exports.showAddPatientForm = (req, res, next) => {
    res.render('pet-form', {
        pat: {},
        pageTitle: 'Rejestracja pacjenta',
        formMode: 'createNew',
        btnLabel: 'Dodaj ppacjenta',
        formAction: '/doc/add',

        navLocation: 'login'
    });
}

exports.showEditPetForm = (req, res, next) => {
    const patId = req.params.petId;
    PatientRepository.getPatientById(patId)
        .then(pat => {
            res.render('pages/pet-form', {
                pat: pat,
                formMode: 'edit',
                pageTitle: 'Edycja pacjenta',
                btnLabel: 'Edytuj pacjenta',
                formAction: '/doc/edit',
                navLocation: 'login'
            });
        });
};

exports.showPetDetails = (req, res, next) => {
    const patId = req.params.patId;
    PatientRepository.getPatientById(patId)
        .then(pet => {
            res.render('pages/pet-form', {
                pet: pet,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pacjenta',
                formAction: '',
                navLocation: 'login'
            });
        });
}




exports.showVisitDetails = (req, res, next) => {
    //VIsitRepository.getVisitById()
    res.render('pages/visit-details', { navLocation: 'vis' });
}


