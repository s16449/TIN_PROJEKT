const Sequelize = require('sequelize');

const Doctor = require("../../model/sequelize/Doctor");
const Visit = require("../../model/sequelize/Visit");
const Owner = require("../../model/sequelize/Owner");
const Patient = require("../../model/sequelize/Patient");


exports.getVisits = () => {
    return Visit.findAll({
        include: [
            {
                model: Doctor,
                as: 'doctors'
            },
            {
                model: Patient,
                as: 'patients',
                include: [{
                    model: Owner,
                    as: 'owners'
                }]
            },
        ]
    });
};


exports.getVisitById = (visitId) => {
    return Visit.findByPk(visitId, {
        include: [
            {
                model: Doctor,
                as: 'doctors'
            },
            {
                model: Patient,
                as: 'patients'
            }]
    });
};

exports.createVisit = (data) => {
    console.log(JSON.stringify(data));

    return Visit.create({
        docId: data.docId,
        patientId: data.patientId,
        dataOf: data.dataOf,
        purpose: data.purpose,
        description: data.description
    });
};

exports.updateVisit = (visitId, data) => {
    return Visit.update(data, { where: { _id: visitId } });
}

exports.deleteVisit = (visitId) => {
    return Visit.destroy({
        where: { _id: visitId }
    });
}

exports.deleteManyVisits = (visitIds) => {
    return Visit.find({ _id: { [Sequelize.Op.in]: visitIds } })
}