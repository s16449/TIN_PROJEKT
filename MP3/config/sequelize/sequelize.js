const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-projekt-polak-s16449', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

