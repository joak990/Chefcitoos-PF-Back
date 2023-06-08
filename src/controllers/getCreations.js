const { Op } = require('sequelize');

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
        } else if (filterName === "typeProductBurgers") {
            const creationPosted = await Creations.findAll({
                where: {
                    product_id: {
                        [Op.in]: [1, 2, 3, 4]
                    },
                    isPosted: true
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
        } else if (filterName === "typeProductHotDogs") {
            const creationPosted = await Creations.findAll({
                where: {
                    product_id: {
                        [Op.in]: [5, 6, 7, 8]
                    },
                    isPosted: true
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
                    isPosted: true
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
                    isPosted: true
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
        // else if (filterName === "priceDesc") {
        //     const creationPosted = await Creations.findAll({
        //         order: [['price', 'DESC']],
        //         include: [
        //             {
        //                 model: Users,
        //                 as: 'Users',
        //                 attributes: ['name']
        //             },
        //             {
        //                 model: products,
        //                 attributes: ['name']
        //             }
        //         ]
        //     });
        //     aux = creationPosted.map(el => el.dataValues)
        //     return aux
        // } else if (filterName === "priceAsc") {
        //     const creationPosted = await Creations.findAll({
        //         order: [['price', 'ASC']],
        //         include: [
        //             {
        //                 model: Users,
        //                 as: 'Users',
        //                 attributes: ['name']
        //             },
        //             {
        //                 model: products,
        //                 attributes: ['name']
        //             }
        //         ]
        //     });
        //     aux = creationPosted.map(el => el.dataValues)
        //     return aux
        // }
        const allCreations = await Creations.findAll({
            where: {
                isPosted: true
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
        aux = allCreations.map(el => el.dataValues)
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getCreations;