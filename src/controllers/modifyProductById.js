const { products } = require('../dataBase/models');

const modifyProductById = async (product) => {
  try {
    const productById = await products.findByPk(product.id);

    if (productById) {
      await productById.update({
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        customizable: product.customizable,
        type_product: product.type_product,
        isDeleted: product.isDeleted,
        elements: product.elements,
      });

      return productById.dataValues;
    } else {
      throw new Error('No se encontró el producto con el ID proporcionado');
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = modifyProductById;
