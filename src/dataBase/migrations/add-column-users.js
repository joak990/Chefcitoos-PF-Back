'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'uid', {
        type: Sequelize.STRING,
        allowNull: true
    });
  },
  async down() {}
};