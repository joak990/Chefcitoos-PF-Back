const { products } = require('../dataBase/models');

const getProducts = async () => {
    try {
        const allProducts = await products.findAll();
        const aux = allProducts.map(el=>el.dataValues)
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getProducts;