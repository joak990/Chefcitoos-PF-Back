const { Creations, sequelize, Sequelize } = require('../dataBase/models');
const { products } = require('../dataBase/models');
const { Orders, Order_product } = require('../dataBase/models');
const { Creations_order } = require('../dataBase/models');
const createCreation = require('./createCreation')

const updateState = async (id, state, confirmation_code) => {
    try {
        const orderById = await Orders.findByPk(id);
        if (!orderById) {
            return 'Orden no encontrada'
        }
        orderById.state = state;
        orderById.confirmation_code = confirmation_code
        await orderById.save();
        return `Valor del estado actualizado a: ${state} correctamente`
    } catch (error) {
        throw new Error(error);
    }
}

const getOrderById = async (id) => {
    try {
        const orderById = await Orders.findByPk(id, {
            include: [
                {
                    model: products,
                    attributes: ["name"],
                    through: {
                        attributes: ['quantity']
                    },
                },
                {
                    model: Creations,
                    attributes: ["name"],
                    through: {
                        attributes: ['quantity']
                    },
                }
            ],

        });
        return orderById;
    } catch (error) {
        throw new Error(error);
    }
}

const createOrder = async (order) => {
    const transaction = await sequelize.transaction();
    try {
        const creationsArr = [];
        const productsArr = [];

        // Creations logic
        const newOrder = await Orders.create({
            users_id: order.users_id,
            total_price: order.total_price,
            state: order.state,
            date: Sequelize.literal('CURRENT_TIMESTAMP')
        })

        if (order.creations && order.creations.length > 0) {
            await Promise.all(order.creations.map(async (creation) => {

                if (creation.id) {
                    const modifyPurchasedAmount = await Creations.findByPk(creation.id);
                    modifyPurchasedAmount.purchased_amount += creation.quantity;
                    await modifyPurchasedAmount.save({ transaction });
                    creationsArr.push({
                        id: modifyPurchasedAmount.dataValues.id,
                        quantity: creation.quantity
                    })
                } else {
                    const newCreation = await createCreation({
                        product_id: creation.product_id,
                        users_id: creation.users_id,
                        name: creation.name,
                        price: creation.price,
                        image: creation.image,
                        isPosted: creation.isPosted,
                        purchased_amount: creation.quantity,
                        isDeleted: creation.isDeleted,
                        components: creation.components,
                    })
                    creationsArr.push({
                        id: newCreation.id,
                        quantity: creation.quantity
                    })
                }
            }))
        }

        if (order.products && order.products.length > 0) {
            order.products.forEach(async product => {
                productsArr.push({
                    id: product.product_id,
                    quantity: product.quantity
                });
            });
        }

        await Promise.all(creationsArr.map(async el => {
            await Creations_order.create({
                creation_id: el.id,
                order_id: newOrder.id,
                quantity: el.quantity
            })
        }));

        await Promise.all(productsArr.map(async el => {
            await Order_product.create({
                product_id: el.id,
                order_id: newOrder.id,
                quantity: el.quantity
            })
        }));


        await transaction.commit();
        return newOrder.dataValues;
    } catch (error) {
        await transaction.rollback();
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