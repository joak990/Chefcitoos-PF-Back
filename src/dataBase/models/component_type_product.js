'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Component_type_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Component_type_product.hasMany(models.products)
      Component_type_product.hasMany(models.components_type)
    }
  }
  Component_type_product.init({
    product_id: DataTypes.INTEGER,
    component_type_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'component_type_product',
  });
  return Component_type_product;
};