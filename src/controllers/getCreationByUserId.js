const { Creations } = require('../dataBase/models');
const { Users } = require('../dataBase/models');
const { products } = require('../dataBase/models');
const { Creation_component } = require('../dataBase/models');
const { Components } = require('../dataBase/models');

const getCreationsByUserId = async (id, type) => {
    try {
        let aux = {};
        
        if (type === "creation") {
            const temp = {};

            const creationPromise = Creations.findByPk(id, {
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

            const auxCreationComponentPromise = Creation_component.findAll({
                where: {
                    creation_id: id
                },
                include: [
                    {
                        model: Components,
                        attributes: ['name']
                    }
                ]
            });

            const [creationResult, auxCreationComponentResult] = await Promise.all([creationPromise, auxCreationComponentPromise]);

            const componentNames = auxCreationComponentResult.map(item => item.Component.name);
            temp.componentNames = componentNames;

            aux = { ...creationResult.toJSON(), ...temp };
            
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