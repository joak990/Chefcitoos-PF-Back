'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assessment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assessment.belongsTo(models.Users, {
        foreignKey: "user_id"
      })
      Assessment.belongsTo(models.Creations, {
        foreignKey: "creation_id"
      })
    }
  }
  Assessment.init({
    creation_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    vote: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Assessment',
  });
  return Assessment;
};