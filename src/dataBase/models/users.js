'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    
    static associate(models) {
      Users.hasMany(models.Creations,{
        foreignKey: "users_id"
      })
      // define association here
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    isDeleted : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};