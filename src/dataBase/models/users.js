'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    
    static associate(models) {
      Users.hasMany(models.Creations,{
        foreignKey: "users_id",
        onDelete: "CASCADE"
      })
      Users.hasMany(models.Assessments, {
        foreignKey: "user_id"
      })
      Users.hasMany(models.Orders, {
        foreignKey: "users_id"
      })
    }
  }
  Users.init({
    name: DataTypes.STRING,
    uid: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    isDeleted : DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    root: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};