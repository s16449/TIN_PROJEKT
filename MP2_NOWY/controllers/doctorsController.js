const doctorsRepository = require('../repository/sequelize/DoctorRepository');


exports.showDoctorList = (req, res, next) => {
    doctorsRepository.getDoctors()
        .then(docs => {
            res.render('pages/doctors/doctor-list', {
                docs: docs,
                navLocation: "doc"
            });

        });

}

exports.showDoctorForm = (req, res, next) => {
    res.render('pages/doctors/doctor-form', {
        doc: {},
        pageTitle: 'Nowy lekarz',
        formMode: 'createNew',
        btnLabel: 'Dodaj lekarza',
        formAction: '/doctors/add',
        navLocation: "doc"
    });
}

exports.showEditDoctorForm = (req, res, next) => {
    const docId = req.params.docId;
    doctorsRepository.getDoctorById(docId)
        .then(doc => {
            res.render('pages/doctors/doctor-form', {
                doc: doc,
                pageTitle: 'Edycja lekarza',
                formMode: 'edit',
                btnLabel: 'Edytuj lekarza',
                formAction: '/doctors/edit',
                navLocation: "doc"
            });
        });
}



exports.showDoctorDetails = (req, res, next) => {
    const docId = req.params.docId;
    doctorsRepository.getDoctorById(docId)
        .then(doc => {
            res.render('pages/doctors/doctor-form', {
                doc: doc,
                pageTitle: 'Szczegóły lekarza',
                formMode: 'showDetails',
                formAction: '',
                navLocation: "doc"
            });
        });
}

exports.addDoctor = (req, res, next) => {
    const docData = { ...req.body };
    doctorsRepository.createDoctor(docData)
        .then(result => {
            res.redirect('/doctors');
        });
};

exports.updateDoctor = (req, res, next) => {
    const docId = req.body._id;
    const docData = { ...req.body };
    doctorsRepository.updateDoctor(docId, docData)
        .then(() => {
            res.redirect('/doctors');
        })
};

exports.deleteDoctor = (req, res, next) => {
    const docId = req.params.docId;
    doctorsRepository.deleteDoctor(docId)
        .then(() => {
            res.redirect('/doctors');
        })
};

