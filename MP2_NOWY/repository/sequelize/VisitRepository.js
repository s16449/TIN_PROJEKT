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

exports.createVisit = (data) => {
    console.log(JSON.stringify(data));

    return Visit.create({
        docId: data.docId,
        patientId: data.patientId,
        dataOf: data.dataOf,
        purpose: data.purpose,
        description: data.description,
        docLastName: data.docLastName,
        ownerPatLastName: data.ownerPatLastName
    });
};

exports.updateVisit = (visitId, data) => {

    const docId = data.docId;
    const patientId = data.patientId;
    const dataOf = data.dataOf;
    const purpose = data.purpose;
    const description = data.description;
    const docLastName = data.docLastName;
    const ownerPatLastName = data.ownerPatLastName;
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