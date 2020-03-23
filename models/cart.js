const Sequalize = require('sequelize');
const sequelize = require('../util/database');
const Cart = sequelize.define('cart', {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKeys: true
  },
  quantity: Sequalize.INTEGER
});

module.exports = Cart;