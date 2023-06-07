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
      Orders.belongsTo(models.Creations_order, {
        foreignKey: "CreationsOrderId"
      })
      Orders.belongsTo(models.Order_product, {
        foreignKey: "OrderProductId"
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
    date: DataTypes.STRING,
    OrderProductId: DataTypes.INTEGER,
    CreationsOrderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};