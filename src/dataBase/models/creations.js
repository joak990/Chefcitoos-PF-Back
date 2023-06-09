'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Creations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Creations.belongsToMany(models.Orders, {
        through: "Creations_orders", 
        foreignKey: "creation_id"
      })
      Creations.belongsTo(models.Users, {
          foreignKey: "users_id",
          as: "Users"
        }
      )
      Creations.belongsTo(models.products, {
        foreignKey: "product_id"
      })
      Creations.hasMany(models.Assessments, {
        foreignKey: "creation_id"
      })
      Creations.belongsToMany(models.Components, { through: "Creation_component", foreignKey: "creation_id" });
    }
  }
  Creations.init({
    product_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    isPosted: DataTypes.BOOLEAN,
    purchased_amount: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Creations',
  });
  return Creations;
};