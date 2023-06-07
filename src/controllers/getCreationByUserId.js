const { Op } = require('sequelize');

const { Creations } = require('../dataBase/models');
const { Users } = require('../dataBase/models');
const { products } = require('../dataBase/models');
const { Creation_component } = require('../dataBase/models');
const { Components } = require('../dataBase/models');
const { components_categ } = require('../dataBase/models')

const getCreationsByUserId = async (id, type, filterName) => {
    try {
        let aux = {};
        // Creation detail
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
                        attributes: ['name'],
                        include: [
                            {
                                model: components_categ,
                                // as: 'component',
                                attributes: ['name']
                            }
                        ]
                    }
                ]
            });
            const al = await auxCreationComponentPromise;
            const categ = [];
            al.map(el => categ.push(el.dataValues.Component.dataValues.components_categ.dataValues.name));
            // console.log(al[0].dataValues.Component.dataValues.name)
            console.log(categ)
            const [creationResult, auxCreationComponentResult] = await Promise.all([creationPromise, auxCreationComponentPromise]);

            const componentNames = auxCreationComponentResult.map(item => item.Component.name);
            temp.componentNames = componentNames;

            aux = { ...creationResult.toJSON(), ...temp };
            // User Creations
        } else if (type === "user") {

            if (filterName === 'typeProductBurgers') {
                const creationPosted = await Creations.findAll({
                    where: {
                        product_id: {
                            [Op.in]: [1, 2, 3, 4]
                        },
                        users_id: id
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
                return aux;
            } else if (filterName === 'typeProductHotDogs') {
                const creationPosted = await Creations.findAll({
                    where: {
                        product_id: {
                            [Op.in]: [5, 6, 7, 8]
                        },
                        users_id: id
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
            } else if (filterName === "typeProductSandwitch") {
                const creationPosted = await Creations.findAll({
                    where: {
                        product_id: {
                            [Op.in]: [12, 13, 14, 15]
                        },
                        users_id: id
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
            } else if (filterName === "typeProductBurrito") {
                const creationPosted = await Creations.findAll({
                    where: {
                        product_id: {
                            [Op.in]: [9, 10, 11]
                        },
                        users_id: id
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