'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Creations_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Creations_order.belongsTo(models.Creations, {
        foreignKey: "creation_id"
      })
      Creations_order.hasMany(models.Orders, {
        foreignKey: "CreationsOrderId"
      })
    }
  }
  Creations_order.init({
    creation_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Creations_order',
  });
  return Creations_order;
};