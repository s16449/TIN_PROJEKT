const Doctor = require("../../model/sequelize/Doctor");
const Visit = require("../../model/sequelize/Visit");
const Owner = require("../../model/sequelize/Owner");
const Patient = require("../../model/sequelize/Patient");

exports.getPatients = () => {
    return Patient.findAll(
        {include: [{
            model: Owner,
            as: 'owners'
        }]}
    )
   
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

exports.createPatient = (newPatData, ownId) => {
    return Patient.create({
        name: newPatData.name,
        sex: newPatData.sex,
        species: newPatData.species,
        breed: newPatData.breed,
        age: newPatData.age,
        ownerId: newPatData.ownId
    });
};

exports.updatePatient = (patId, patData) => {
    const name = patData.name;
    const sex = patData.sex;
    const species = patData.species;
    const breed = patData.breed;
    const age = petData.age;
    const ownerId = petData.ownerId;
    return Patient.update(patData, { where: { _id: patId } });
};

exports.deletePatient = (patId) => {
    return Patient.destroy({
        where: { _id: patId }
    });

}; 