const { components_categ_products } = require('../dataBase/models');
const { components_categ } = require('../dataBase/models');
const { products } = require('../dataBase/models');

const getComponentsCategProductsById = async (id) => {
 
    try {
        const creationPromise = components_categ_products.findAll({
            where: {
                product_id: id,
            },
            include: [
                {
                    model: components_categ,
                    attributes: ['name']
                },
                {
                    model: products,
                    attributes: ['name']
                }
            ]
        });
        
        return creationPromise;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

module.exports = {getComponentsCategProductsById};