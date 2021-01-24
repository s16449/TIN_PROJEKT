const Doctor = require("../../model/sequelize/Doctor");
const Visit = require("../../model/sequelize/Visit");
const Patient = require("../../model/sequelize/Patient");

exports.getPatients = () => {
    return Patient.findAll({
        include: [{
            model: Visit,
            as: 'visits'
        }]
    });

};

exports.getPatientById = (patId) => {
    return Patient.findByPk(patId,
        {
            include: [{
                model: Visit,
                as: 'visits',
                include: [{
                    model: Doctor,
                    as: 'doctors'
                }]
            }]
        });
};

exports.createPatient = (newPatData) => {
    return Patient.create({
        patName: newPatData.patName,
        sex: newPatData.sex,
        species: newPatData.species,
        breed: newPatData.breed,
        age: newPatData.age,
        ownerFirstName: newPatData.ownerFirstName,
        ownerLastName: newPatData.ownerLastName,
        email: newPatData.email,
        phone: newPatData.phone
    });
};

exports.updatePatient = (patId, patData) => {
    const patName = patData.patName;
    const sex = patData.sex;
    const species = patData.species;
    const breed = patData.breed;
    const age = patData.age;
    const ownerFirstName = patData.ownerFirstName;
    const ownerLastName = patData.ownerLastName;
    const email = patData.email;
    const phone = patData.phone;
    return Patient.update(patData, { where: { _id: patId } });
};

exports.deletePatient = (patId) => {
    return Patient.destroy({
        where: { _id: patId }
    });

}; 