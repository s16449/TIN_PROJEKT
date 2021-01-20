const visitsRepository = require('../repository/sequelize/VisitRepository');
const doctorsRepository = require('../repository/sequelize/DoctorRepository');
const patientsRepository = require('../repository/sequelize/PatientRepository');

exports.showVisitList = (req, res, next) => {
    visitsRepository.getVisits()
        .then(visits => {
            res.render('pages/visits/visit-list', {
                visits: visits,
                navLocation: 'vis'
            });
        })


}

exports.showAddVisitForm = (req, res, next) => {
    // res.render('pages/visits/visit-form', { navLocation: "vis" });
    let allDocs, allPats;
    doctorsRepository.getDoctors()
        .then(docs => {
            allDocs = docs;
            return patientsRepository.getPatients();
        })
        .then(pats => {
            allPats = pats;
            res.render('pages/visits/visit-form', {

                allDocs: allDocs,
                allPats: allPats,
                vis: {},
                pageTitle: 'Nowa wizyta',
                formMode: 'createNew',
                btnLabel: 'Dodaj wizytę',
                formAction: '/visits/add',
                navLocation: 'vis'
            });
        });

}

exports.showEditVisitForm = (req, res, next) => {
    const visId = req.params.visId;
    let allDocs, allPats, v;
    visitsRepository.getVisitById(visId)
        .then(vis => {
            return vis;
        })
        .then(vis => {
            v = vis;
            return doctorsRepository.getDoctors();
        })
        .then(docs => {
            allDocs = docs;
            return patientsRepository.getPatients();
        })
        .then(pats => {
            allPats = pats;

        })
        .then(() => {
            res.render('pages/visits/visit-form', {
                vis: v,
                allPats: allPats,
                allDocs: allDocs,
                formMode: 'edit',
                pageTitle: 'Edycja wizyty',
                btnLabel: 'Edytuj wizyte',
                formAction: '/visits/edit',
                navLocation: 'vis'

            });


        })
}
exports.showVisitDetails = (req, res, next) => {
    // res.render('pages/visits/visit-details', { navLocation: "vis" });
    const visId = req.params.visId;
    let allDocs, allPats, v;
    visitsRepository.getVisitById(visId)
        .then(vis => {
            return vis;
        })
        .then(vis => {
            v = vis;
            return doctorsRepository.getDoctors();
        })
        .then(docs => {
            allDocs = docs;
            return patientsRepository.getPatients();
        })
        .then(pats => {
            allPats = pats;

        })
        .then(() => {
            res.render('pages/visits/visit-form', {
                vis: v,
                allPats: allPats,
                allDocs: allDocs,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły wizyty',
                formAction: '/visits/edit',
                navLocation: 'vis'
            });
        });
}

exports.addVisit = (req, res, next) => {
    const visData = {...req.body };
    console.log(visData);
    visitsRepository.createVisit(visData)
        .then(result => {
            res.redirect('/visits');
        })
}

exports.updateVisit = (req, res, next) => {
    const visId = req.body._id;
    const visData = { ...req.body };
    visitsRepository.updateVisit(visId, visData)
        .then(() => {
            res.redirect('/visits');
        });
};

exports.deleteVisit = (req, res, next) => {
    const visId = req.params.visId;
    visitsRepository.deleteVisit(visId)
        .then(() => {
            res.redirect('/visits');
        });
};
