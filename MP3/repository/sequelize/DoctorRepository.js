const Doctor = require("../../model/sequelize/Doctor");
const Visit = require("../../model/sequelize/Visit");
const Patient = require("../../model/sequelize/Patient");
const authUtil = require('../../util/authUtils');

exports.getDoctors = () => {
    return Doctor.findAll({
        include: [{
            model: Visit,
            as: 'visits'
        }]
    });
};

exports.getDoctorById = (docId) => {
    return Doctor.findByPk(docId,
        {
            include: [{
                model: Visit,
                as: 'visits',
                include: [{
                    model: Patient,
                    as: 'patients'
                }]
            }]
        });
};

exports.createDoctor = (newDocData) => {
    const pass = authUtil.hashPassword(newDocData.password);
    return Doctor.create({
        firstName: newDocData.firstName,
        lastName: newDocData.lastName,
        email: newDocData.email,
        specialization: newDocData.specialization,
        password: pass
    });
};

exports.updateDoctor = (docId, docData) => {
    docData.password = authUtil.hashPassword(docData.password);
    return Doctor.update(docData, { where: { _id: docId } });
};

exports.deleteDoctor = (docId) => {
    return Doctor.destroy({
        where: { _id: docId }
    });

};

exports.findByEmail = (email) => {
    return Doctor.findOne({
        where: { email: email }
    });
}

