const Sequelize = require('sequelize');

const Doctor = require("../../model/sequelize/Doctor");
const Visit = require("../../model/sequelize/Visit");

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

exports.createVisit = (visData) => {
    console.log("create" + JSON.stringify(visData));

    return Visit.create({
        docId: visData.docId,
        patientId: visData.patientId,
        dateOf: visData.dateOf,
        purpose: visData.purpose,
        description: visData.description
       
        
    });
};

exports.updateVisit = (visId, visData) => {

    const docId = visData.docId;
    const patientId = visData.patientId;
    const dateOf = visData.dateOf;
    const purpose = visData.purpose;
    const description = visData.description;
   
   
    return Visit.update(visData, { where: { _id: visId } });
}

exports.deleteVisit = (visitId) => {
    return Visit.destroy({
        where: { _id: visitId }
    });
}

exports.deleteManyVisits = (visitIds) => {
    return Visit.find({ _id: { [Sequelize.Op.in]: visitIds } })
}