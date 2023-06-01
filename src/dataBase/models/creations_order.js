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
      Creations_order.belongsTo(models.Creations)
      Creations_order.belongsTo(models.Orders)
    }
  }
  Creations_order.init({
    creation_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Creations_order',
  });
  return Creations_order;
};