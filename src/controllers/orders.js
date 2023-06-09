const { Creations } = require('../dataBase/models');
const { products } = require('../dataBase/models');
const { Orders } = require('../dataBase/models');
const { Creations_order } = require('../dataBase/models');
const { Order_product } = require('../dataBase/models');

const updateState = async (id, value) => {
    try {
        const orderById = await Orders.findByPk(id);
        if(!orderById) {
            return 'Orden no encontrada'
        }
        orderById.state = value;
        await orderById.save();
        return `Valor del estado actualizado a: ${value} correctamente`
    } catch (error) {
        throw new Error(error);
    }
}

const getOrderById = async (id) => {
    try {
        const orderById = await Orders.findByPk(id);
        return orderById;
    } catch (error) {
        throw new Error(error);
    }
}

const createOrder = async (order) => {
    try {
        const newOrder = await Orders.create({
            users_id: order.users_id,
            total_price: order.total_price,
            state: order.state,
            date: order.date,
            // OrderProductId: order.OrderProductId,
            // CreationsOrderId: order.CreationsOrderId
        })
        return newOrder.dataValues;
    } catch (error) {
        console.log('::::', error)
        throw new Error(error);
    }
}

const orderCreations = async (order) => {
    try {
        const newOrder = await Creations_order.create({
            creation_id: order.creation_id,
            order_id: order.order_id,
            amount: order.amount,
        })
        return newOrder.dataValues;
    } catch (error) {
        console.log('::::', error)
        throw new Error(error);
    }
}

const orderProducts = async (order) => {
    try {
        const newOrder = await Order_product.create({
            product_id: order.product_id,
            order_id: order.order_id,
            amount: order.amount,
        })
        return newOrder.dataValues;
    } catch (error) {
        console.log('::::', error)
        throw new Error(error);
    }
}

module.exports = { createOrder, orderCreations, orderProducts, getOrderById, updateState };