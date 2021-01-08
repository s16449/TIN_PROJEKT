const OwnerRepository = require('../repository/sequelize/OwnerRepository');

exports.getOwners = (req, res, next) => {
    OwnerRepository.getOwners()
        .then(owns => {
            res.status(200).json(owns);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getOwnerById = (req, res, next) => {
    const ownId = req.params.ownId;
    OwnerRepository.getOwnerById(ownId)
        .then(own => {
            if(!own) {
                res.status(404).json({
                    message: 'Owner with id: '+ownId+' not found'
                })
            } else {
                res.status(200).json(own);
            }
        });
};

exports.createOwner = (req, res, next) => {
    OwnerRepository.createOwner(req.body)
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

exports.updateOwner = (req, res, next) => {
    const ownId = req.params.ownId;
    OwnerRepository.updateOwner(ownId, req.body)
        .then(result => {
           res.status(200).json({message: 'Owner updated!', own: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteOwner = (req, res, next) => {
    const ownId = req.params.ownId;
    OwnerRepository.deleteOwner(ownId)
        .then(result => {
            res.status(200).json({message: 'Removed owner', own: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

