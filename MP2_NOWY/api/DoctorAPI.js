const DoctorRepository = require('../repository/sequelize/DoctorRepository');

exports.getDoctors = (req, res, next) => {
    DoctorRepository.getDoctors()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getDoctorById = (req, res, next) => {
    const docId = req.params.docId;
    DoctorRepository.getDoctorById(docId)
        .then(doc => {
            if(!doc) {
                res.status(404).json({
                    message: 'Doctor with id: '+docId+' not found'
                })
            } else {
                res.status(200).json(doc);
            }
        });
};

exports.createDoctor = (req, res, next) => {
    DoctorRepository.createDoctor(req.body)
        .then(newObj => {
           res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateDoctor = (req, res, next) => {
    const docId = req.params.docId;
    DoctorRepository.updateDoctor(docId, req.body)
        .then(result => {
           res.status(200).json({message: 'Doctor updated!', doc: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteDoctor = (req, res, next) => {
    const docId = req.params.docId;
    DoctorRepository.deleteDoctor(docId)
        .then(result => {
            res.status(200).json({message: 'Removed doctor', doc: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

