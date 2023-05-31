'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class components_categ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      components_categ.hasOne(models.components_categ_products)
      components_categ.hasMany(models.Components)
    }
  }
  components_categ.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'components_categ',
  });
  return components_categ;
};