const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Patient = sequelize.define('Patient', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    patName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    species: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    breed: {
        type: Sequelize.STRING,
        allowNull: true
    },
    age: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ownerFirstName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    ownerLastName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Patient;

