const { Creations } = require('../dataBase/models');
const { Users } = require('../dataBase/models');
const { products } = require('../dataBase/models');
const { Creation_component } = require('../dataBase/models');

const getCreationsByUserId = async (id, type) => {
    try {
        let aux;
        if (type === "creation") {
            aux = await Creations.findByPk(id, {
                order: [['createdAt', 'DESC']],
                include: [
                    // {
                    //     model: Creation_component,
                    //     // as: 'Usecomponents_categ',
                    //     attributes: ['name']
                    // },
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
        } else if (type === "user") {
            aux = await Creations.findAll({
                where: {
                    users_id: id,
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
        }
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getCreationsByUserId;