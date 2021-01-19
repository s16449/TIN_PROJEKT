const VisitRepository = require('../repository/sequelize/VisitRepository');

exports.getVisits= (req, res, next) => {
    VisitRepository.getVisits()
        .then(vis => {
            res.status(200).json(vis);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getVisitById = (req, res, next) => {
    const visId = req.params.visId;
    VisitRepository.getVisitById(visId)
        .then(vis => {
            if(!vis) {
                res.status(404).json({
                    message: 'Visit with id: '+visId+' not found'
                })
            } else {
                res.status(200).json(vis);
            }
        });
};

exports.createVisit = (req, res, next) => {
    VisitRepository.createVisit(req.body)
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

exports.updateVisit = (req, res, next) => {
    const visId = req.params.visId;
    VisitRepository.updateVisit(visId, req.body)
        .then(result => {
           res.status(200).json({message: 'Visit updated!', vis: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteVisit = (req, res, next) => {
    const visId = req.params.visId;
    VisitRepository.deleteVisit(visId)
        .then(result => {
            res.status(200).json({message: 'Removed visit', vis: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

