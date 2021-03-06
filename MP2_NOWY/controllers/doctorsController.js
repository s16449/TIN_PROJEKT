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
        navLocation: "doc",
        validationErrors: []
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
                navLocation: "doc",
                validationErrors: []
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
                navLocation: "doc",
                validationErrors: []
            });
        });
}

exports.addDoctor = (req, res, next) => {
    const docData = { ...req.body };
    doctorsRepository.createDoctor(docData)
        .then(result => {
            res.redirect('/doctors');
        }).catch(err => {

            err.errors.forEach(e => {
                if (e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "[DB]Adres email jest przypisany do kogoś innego.";
                }
            })
            console.log("Err " + err);
            console.log("err details " + err.details);
            res.render('pages/doctors/doctor-form', {
                doc: docData,
                pageTitle: 'Dodawanie lekarza',
                formMode: 'createNew',
                btnLabel: 'Dodaj lekarza',
                formAction: '/doctors/add',
                navLocation: 'doc',
                validationErrors: err.errors
            });
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

