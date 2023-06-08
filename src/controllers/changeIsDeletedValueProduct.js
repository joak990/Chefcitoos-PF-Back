const { products } = require('../dataBase/models');

const changeIsDeletedValueProduct = async (id) => {
    try {
        const product = await products.findByPk(id);
        if(!product) {
            return 'Producto no encontrado'
        }
        // product.isDeleted = value;
        // await product.save();
        // return `Valor isDeleted actualizado a: ${value} correctamente`

        if(product.isDeleted){
            product.isDeleted = false;
            await product.save()
            return `Valor isDeleted del id: ${id} actualizado a: ${product.isDeleted} correctamente`;
        } else {
            product.isDeleted = true;
            await product.save()
            return `Valor isDeleted del id: ${id} actualizado a: ${product.isDeleted} correctamente`;
        }

    } catch (error) {
        throw new Error (error);
    }
}

module.exports = changeIsDeletedValueProduct;