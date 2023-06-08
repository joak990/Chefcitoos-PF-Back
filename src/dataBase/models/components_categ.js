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
      components_categ.hasMany(models.components_categ_products, {
        foreignKey: 'Componente_categ_id'
      });

      components_categ.hasMany(models.Components, {
        foreignKey: 'component_categ_id'
      });
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