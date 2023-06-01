const { products } = require('../dataBase/models');

const deleteProduct = async (id) => {
    try {
        const product = await products.findByPk(id);
        const aux = { ...product.dataValues };
        await product.destroy();
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = deleteProduct;