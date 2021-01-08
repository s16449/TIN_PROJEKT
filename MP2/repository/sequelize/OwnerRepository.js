const Owner = require("../../model/sequelize/Owner");
const Patient = require("../../model/sequelize/Patient");


exports.getOwners = () => {
    return Owner.findAll();
};

exports.getOwnerById = (ownId) => {
    return Owner.findByPk(ownId,
        {
            include: [{
                model: Patient,
                as: 'patients'
              
            }]
        });
};

exports.createOwner = (newOwnData) => {
    return Owner.create({
        firstName: newOwnData.firstName,
        lastName: newOwnData.lastName,
        email: newOwnData.email,
        phone: newOwnData.phone
    });
};

exports.updateOwner= (ownId, ownData) => {
    const firstName = ownData.firstName;
    const lastName = ownData.lastName;
    const email = ownData.email;
    const phone = ownData.phone;
    return Owner.update(ownData, { where: { _id: ownId }});
};

exports.deleteOwner = (ownId) => {
    return Owner.destroy({
        where: { _id: ownId }
    });

}; 