'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all ([
            queryInterface.addColumn('products', 'description', {
                type: Sequelize.TEXT,
                allowNull: false
            }),
        ]);
    },
    down: () => {}
}