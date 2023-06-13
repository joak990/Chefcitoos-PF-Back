'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assessments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assessments.belongsTo(models.Users, {
        foreignKey: "user_id"
      })
      Assessments.belongsTo(models.Creations, {
        foreignKey: "creation_id"
      })
    }
  }
  Assessments.init({
    creation_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    vote: DataTypes.FLOAT,
    img: DataTypes.TEXT,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Assessments',
  });
  return Assessments;
};