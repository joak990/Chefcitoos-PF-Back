const { products } = require('../dataBase/models');

const createProduct = async (product) => {
    try {
        const newProduct = await products.create({
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            customizable: product.customizable,
            type_product: product.type_product,
            isDeleted: product.isDeleted
        })
        return newProduct.dataValues;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = createProduct;