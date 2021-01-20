const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');


const Visit = sequelize.define('Visit', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    dateOf: {
        type: Sequelize.DATE,
        allowNull: false
    },
    purpose: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    docId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    patientId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
 
});

module.exports = Visit;

