const { Creations } = require('../dataBase/models');

const createCreation = async (creation) => {
    try {
        const newCreation = await Creations.create({
            product_id: creation.product_id,
            users_id: creation.users_id,
            name: creation.name,
            price: creation.price,
            image: creation.image,
            isVisible: creation.isVisible,
            purchased_amount: creation.purchased_amount
        })
        return newCreation.dataValues;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = createCreation;