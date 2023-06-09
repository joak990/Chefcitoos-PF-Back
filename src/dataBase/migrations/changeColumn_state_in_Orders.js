'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('Orders', 'state', {
            type: Sequelize.ENUM('Cancelada', 'Pendiente', 'Pagada', 'Despachada'),
            allowNull: false
        });
    },
    async down() { }
};