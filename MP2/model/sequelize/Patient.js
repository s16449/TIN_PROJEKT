const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Patient = sequelize.define('Patient', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
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
        allowNull: false
    },
    age: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Patient;

