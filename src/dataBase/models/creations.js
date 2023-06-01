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
      Creations.belongsTo(models.Users)
      Creations.belongsTo(models.products)
    }
  }
  Creations.init({
    product_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    isVisible: DataTypes.BOOLEAN,
    purchased_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Creations',
  });
  return Creations;
};