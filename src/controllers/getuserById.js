const { Users } = require('../dataBase/models');

const getuserById = async (id) => {
    try {
        const allProducts = await Users.findByPk(id);
        return allProducts.dataValues;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getuserById;