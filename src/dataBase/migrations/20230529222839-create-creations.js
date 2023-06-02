'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Creations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        references : {
          model : "products",
          key : "id"
        },
        allowNull : false
      },
      users_id: {
        type: Sequelize.INTEGER,
        references : {
          model : "Users",
          key : "id"
        },
        allowNull : false,
        onDelete: "cascade"
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull : false
      },
      isPosted: {
        type: Sequelize.BOOLEAN,
        allowNull : false
      },
      purchased_amount: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Creations');
  }
};