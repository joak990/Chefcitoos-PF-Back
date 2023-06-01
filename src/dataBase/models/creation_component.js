'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Creation_component extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Creation_component.belongsTo(models.Components)
      Creation_component.belongsTo(models.Creations)
    }
  }
  Creation_component.init({
    component_id: DataTypes.INTEGER,
    creation_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Creation_component',
  });
  return Creation_component;
};