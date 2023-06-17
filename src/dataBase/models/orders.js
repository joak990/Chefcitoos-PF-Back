'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsToMany(models.Creations, {
        through: "Creations_orders", 
        foreignKey: "order_id"
      })
      Orders.belongsToMany(models.products, {
        through: "Order_products",
        foreignKey: "order_id"
      })
      Orders.belongsTo(models.Users, {
        foreignKey: "users_id"
      })
    }
  }
  Orders.init({
    users_id: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    state: DataTypes.STRING,
    date: DataTypes.DATE,
    confirmation_code: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};