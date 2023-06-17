'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Components extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Components.hasMany(models.Creation_component, { foreignKey: 'component_id'});
      Components.belongsTo(models.components_categ, { foreignKey: "component_categ_id"});
      Components.belongsToMany(models.Creations, {through: models.Creation_component, foreignKey: "component_id"});
    }
  }

  Components.init({
    component_categ_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Components',
  });
  return Components;
};