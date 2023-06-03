'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.Order_product);
    }
  }

  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    elements: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    customizable: DataTypes.BOOLEAN,
    type_product : DataTypes.STRING,
    isDeleted : DataTypes.BOOLEAN,
    description : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return Products;
};