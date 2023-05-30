'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Type_products.belongsToMany(models.Products)
    }
  }
  Type_products.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'type_products',
  });
  return Type_products;
};