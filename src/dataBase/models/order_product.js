'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order_product.belongsTo(models.products, {
        foreignKey: "product_id"
      })
      Order_product.belongsTo(models.Orders, {
        foreignKey: "order_id"
      })
    }
  }
  Order_product.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_product',
  });
  return Order_product;
};