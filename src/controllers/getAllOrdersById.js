const { Orders } = require('../dataBase/models');

const getAllOrdersById = async (id) => {
    try {
        const allOrders = await Orders.findAll({
            where: {
                users_id: id
            }
        })
        console.log(allOrders);
        return allOrders
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getAllOrdersById;