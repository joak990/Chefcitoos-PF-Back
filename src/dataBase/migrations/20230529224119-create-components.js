'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Components', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      component_categId: {
        type: Sequelize.INTEGER,
        references : {
          model : "components_categs",
          key : "id"
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      isDeleted : {
        type : Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false
      },
      description: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Components');
  }
};