const Doctor = require("../../model/sequelize/Doctor");
const Visit = require("../../model/sequelize/Visit");
const Patient = require("../../model/sequelize/Patient");

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
    return Doctor.create({
        firstName: newDocData.firstName,
        lastName: newDocData.lastName,
        email: newDocData.email,
        specialization: newDocData.specialization
    });
};

exports.updateDoctor = (docId, docData) => {
    const firstName = docData.firstName;
    const lastName = docData.lastName;
    const email = docData.email;
    const specialization = docData.specialization;
    return Doctor.update(docData, { where: { _id: docId } });
};

exports.deleteDoctor = (docId) => {
    return Doctor.destroy({
        where: { _id: docId }
    });

}; 