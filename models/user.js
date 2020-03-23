const Sequalize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKeys: true
    },
    name: Sequalize.STRING,
    email: Sequalize.STRING
});

module.exports = User;