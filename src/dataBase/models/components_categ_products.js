'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Components_categ_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Components_categ_products.belongsTo(models.components_categ)
      Components_categ_products.belongsTo(models.products)
    }
  }
  
  Components_categ_products.init({
    product_id: DataTypes.INTEGER,
    Componente_categ_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'components_categ_products',
  });
  return Components_categ_products;
};