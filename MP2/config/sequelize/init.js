const sequelize = require('./sequelize');

const Doctor = require('../../model/sequelize/Doctor');
const Visit = require('../../model/sequelize/Visit');
const Patient = require('../../model/sequelize/Patient');
const Owner = require('../../model/sequelize/Owner');

module.exports = () => {
    Doctor.hasMany(Visit, { as: 'visits', foreignKey: { name: 'docId', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Visit.belongsTo(Doctor, { as: 'doctors', foreignKey: { name: 'docId', allowNull: false } });

    Patient.hasMany(Visit, { as: 'visits', foreignKey: { name: 'patientId', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Visit.belongsTo(Patient, { as: 'patients', foreignKey: { name: 'patientId', allowNull: false } });

    Owner.hasMany(Patient, { as: 'patients', foreignKey: { name: 'ownerId', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Patient.belongsTo(Owner, { as: 'owners', foreignKey: { name: 'ownerId', allowNull: false } });
    
    let allDocs, allOwners, allPatients;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Doctor.findAll();
        })
        .then(docs => {
            if (!docs || docs.length == 0) {
                return Doctor.bulkCreate([
                    { firstName: 'Jan', lastName: 'Kowalski', email: 'jan.kowalski@frodo.com', specialization: "Neurologia" },
                    { firstName: 'Adam', lastName: 'Zieliński', email: 'adam.zielinski@frodo.com', specialization: "Stomatologia" },
                    { firstName: 'Marian', lastName: 'Nowak', email: 'marian.nowak@frodo.com', specialization: "Kardiologia" },
                ])
                    .then(() => {
                        return Doctor.findAll();
                    });
            } else {
                return docs;
            }
        })
        .then(docs => {
            allDocs = docs;
            return Owner.findAll();
        })
        .then(owns => {
            if (!owns || owns.length == 0) {
                return Owner.bulkCreate([
                    { firstName: 'Waldek', lastName: 'Pniewski', email: 'WLK.pniewa@gmail.com', phone: "334222333" },
                    { firstName: 'Kajtek', lastName: 'Sabak', email: 'kjs.sabak@gmail.com', phone: "3334456633" },
                ])
                    .then(() => {
                        return Owner.findAll();
                    })
            } else {
                return owns;
            }
        })
        .then(owns => {
            allOwners = owns;
            return Patient.findAll();
        })
        .then(pats => {
            if (!pats || pats.length == 0) {
                return Patient.bulkCreate([
                    { name: 'Figa', sex: 'Female', species: 'bunny', breed: 'mini', age: '1 year', ownerId: allOwners[0]._id },
                    { name: 'Marcel', sex: 'Male', species: 'bunny', breed: 'mini', age: '8 moths', ownerId: allOwners[1]._id }
                ])
                    .then(() => {
                        return Doctor.findAll();
                    });
            } else {
                return pats;
            }
        })
        .then(pats => {
            allPatients = pats;
            return Visit.findAll();
        })
        .then(vists => {
            if (!vists || vists.length == 0) {
                return Visit.bulkCreate([
                    { docId: allDocs[0]._id, patientId: allPatients[0]._id, dateOf: '2020-01-01', purpose: 'kontrolna wizyta', description: 'Kontrolna wizyta po badaniu' },
                    { docId: allDocs[1]._id, patientId: allPatients[0]._id, dateOf: '2020-09-01', purpose: 'Szczepienie', description: 'Szczepienie' },
                    { docId: allDocs[0]._id, patientId: allPatients[1]._id, dateOf: '2020-11-01', purpose: 'kontrolna wizyta', description: 'Kontrolna wizyta po badaniu' },
                ]);
            } else {
                return vists;
            }
        });
};

