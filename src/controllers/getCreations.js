const { Creations } = require('../dataBase/models');
const { Users } = require('../dataBase/models');
const { products } = require('../dataBase/models');

const getCreations = async () => {
    try {
        const allCreations = await Creations.findAll({
            include: [
                {
                    model: Users,
                    as: 'Users',
                    attributes: ['name']
                },
                {
                    model: products,
                    attributes: ['name']
                }
            ]
        });
        const aux = allCreations.map(el => el.dataValues)
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getCreations;