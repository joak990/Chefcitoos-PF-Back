'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Assessments', 'isDeleted', {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        });
    },
    async down() {}
};