const patientsRepository = require('../repository/sequelize/PatientRepository');

exports.showPatientList = (req, res, next) => {
    patientsRepository.getPatients()
        .then(pats => {
            res.render('pages/patients/patient-list', {
                pats: pats,
                navLocation: "pat"
            });
        })

}

exports.showPatientForm = (req, res, next) => {
    //res.render('pages/patients/patient-form', { navLocation: "pat" });
    res.render('pages/patients/patient-form', {
        pat: {},
        pageTitle: 'Nowy pacjent',
        formMode: 'createNew',
        btnLabel: 'Dodaj pacjenta',
        formAction: '/patients/add',
        navLocation: "pat"
    });
}

exports.showEditPatientForm = (req, res, next) => {
    const patId = req.params.patId;
    patientsRepository.getPatientById(patId)
        .then(pat => {
            res.render('pages/patients/patient-form', {
                pat: pat,
                pageTitle: 'Edycja pacjenta',
                formMode: 'edit',
                btnLabel: 'Edytuj pacjenta',
                formAction: '/patients/edit',
                navLocation: "pat"
            });
        });
}

exports.showPatientDetails = (req, res, next) => {
    //res.render('pages/patients/patient-details', { navLocation: "pat" });

    const patId = req.params.patId;
    patientsRepository.getPatientById(patId)
        .then(pat => {
            res.render('pages/patients/patient-form', {
                pat: pat,
                pageTitle: 'Szczegóły pacjenta',
                formMode: 'showDetails',
                formAction: '',
                navLocation: "pat"
            });
        });


}

exports.addPatient = (req, res, next) => {
    const patData = { ...req.body };
    patientsRepository.createPatient(patData)
        .then( result => {
            res.redirect('/patients');
        });
};

exports.updatePatient = (req, res, next) => {
    const patId = req.body._id;
const patData = { ...req.body };
patientsRepository.updatePatient(patId, patData)
    .then( () => {
        res.redirect('/patients');
    });


};

exports.deletePatient = (req, res, next) => {
    const patId = req.params.patId;
    patientsRepository.deletePatient(patId)
    .then(() =>{
        res.redirect('/patients');
    });
};

