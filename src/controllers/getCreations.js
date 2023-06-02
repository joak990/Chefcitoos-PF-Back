const { Creations } = require('../dataBase/models');
const { Users } = require('../dataBase/models');
const { products } = require('../dataBase/models');


const getCreations = async (filterName) => {
    try {
        let aux;
        if (filterName === "isPosted") {
            const creationPosted = await Creations.findAll({
                where: {
                    isPosted: true,
                },
                order: [['createdAt', 'DESC']],
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
            aux = creationPosted.map(el => el.dataValues)
            return aux
        }
        const allCreations = await Creations.findAll({
            order: [['createdAt', 'DESC']],
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
        aux = allCreations.map(el => el.dataValues)
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getCreations;