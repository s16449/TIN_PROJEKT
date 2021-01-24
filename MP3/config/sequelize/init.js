const sequelize = require('./sequelize');
const authUtil = require('../../util/authUtils');
const passHash = authUtil.hashPassword('12345');

const Doctor = require('../../model/sequelize/Doctor');
const Visit = require('../../model/sequelize/Visit');
const Patient = require('../../model/sequelize/Patient');


module.exports = () => {
    Doctor.hasMany(Visit, { as: 'visits', foreignKey: { name: 'docId', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Visit.belongsTo(Doctor, { as: 'doctors', foreignKey: { name: 'docId', allowNull: false } });

    Patient.hasMany(Visit, { as: 'visits', foreignKey: { name: 'patientId', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Visit.belongsTo(Patient, { as: 'patients', foreignKey: { name: 'patientId', allowNull: false } });


    let allDocs, allPatients;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Doctor.findAll();
        })
        .then(docs => {
            if (!docs || docs.length == 0) {
                return Doctor.bulkCreate([
                    { firstName: 'Jan', lastName: 'Kowalski', email: 'jan.kowalski@frodo.com', specialization: "Neurologia", password: passHash },
                    { firstName: 'Adam', lastName: 'Zieliński', email: 'adam.zielinski@frodo.com', specialization: "Stomatologia", password: passHash },
                    { firstName: 'Marian', lastName: 'Nowak', email: 'marian.nowak@frodo.com', specialization: "Kardiologia",password: passHash }
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
            return Patient.findAll();
        })
        .then(patients => {
            if (!patients || patients.length == 0) {
                return Patient.bulkCreate([
                    { patName: 'Figa', sex: 'samiczka', species: 'Królik', breed: 'Miniaturka', age: '2 lata', ownerFirstName: 'Stanislaw', ownerLastName: 'Wach', email: 'staszek@wp.pl', phone: '223343212' },
                    { patName: 'Marcel', sex: 'samiec', species: 'Królik', breed: 'Miniaturka', age: '8 miesięcy', ownerFirstName: 'Pawel', ownerLastName: 'Mezynski', email: 'pawel.mezynski@gmail.com', phone: '3232524352' },
                    { patName: 'Rocket', sex: 'samiec', species: 'Pies', breed: 'Kundelek', age: '5 miesięcy', ownerFirstName: 'Daniel', ownerLastName: 'Pniewa', email: 'danielo@gmail.com', phone: '323356334223' }
                ])
                    .then(() => {
                        return Doctor.findAll();
                    });
            } else {
                return patients;
            }
        })
        .then(patients => {
            allPatients = patients;
            return Visit.findAll();
        })
        .then(vists => {
            if (!vists || vists.length == 0) {
                return Visit.bulkCreate([
                    { docId: allDocs[0]._id, patientId: allPatients[0]._id,  dateOf: '2020-01-01', purpose: 'kontrolna wizyta', description: 'Kontrolna wizyta po badaniu' },
                    { docId: allDocs[1]._id, patientId: allPatients[0]._id,  dateOf: '2020-09-01', purpose: 'Szczepienie', description: 'Szczepienie na ' },
                    { docId: allDocs[0]._id, patientId: allPatients[1]._id, dateOf: '2020-11-01', purpose: 'kontrolna wizyta', description: 'Kontrolna wizyta po badaniu' }
                ]);
            } else {
                return vists;
            }
        });
};

