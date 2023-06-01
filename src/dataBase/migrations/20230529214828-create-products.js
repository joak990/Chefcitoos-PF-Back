'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      elements: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      image: {
        type: Sequelize.STRING,
        allowNull : false
      },
      type_product : {
        type: DataTypes.ENUM('hamburguesa', 'perro_caliente', 'sandwich', 'burrito', 'bebidas', 'otros_platos'),
        allowNull : false
      },
      customizable: {
        type: Sequelize.BOOLEAN,
        allowNull : false
      },
      isDeleted : {
        type : Sequelize.BOOLEAN,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};