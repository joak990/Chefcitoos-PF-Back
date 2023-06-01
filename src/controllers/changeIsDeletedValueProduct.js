const { products } = require('../dataBase/models');

const changeIsDeletedValueProduct = async (id, value) => {
    try {
        const product = await products.findByPk(id);
        if(!product) {
            return 'Producto no encontrado'
        }
        product.isDeleted = value;
        await product.save();
        return `Valor isDeleted actualizado a: ${value} correctamente`
    } catch (error) {
        throw new Error (error);
    }
}

module.exports = changeIsDeletedValueProduct;