'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assessment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creation_id: {
        type: Sequelize.INTEGER,
        references : {
          model : "Creations",
          key : "id"
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references : {
          model : "Users",
          key : "id"
        }
      },
      content: {
        type: Sequelize.TEXT,
        allowNull : false
      },
      vote: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull : false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Assessment');
  }
};