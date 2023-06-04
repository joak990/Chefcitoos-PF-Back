const { Creations } = require('../dataBase/models');
const { Users } = require('../dataBase/models');
const { products } = require('../dataBase/models');


const searchBarAllCreations = async (productName) => {
    try {
        const creationPromise = Creations.findAll({
            where: {
                name: productName
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
        return creationPromise
    } catch (error) {
        throw new Error(error);
    }
}

const searchBarUserCreations = async (props) => {
    try {
        const creationPromise = await Creations.findAll({
            where: {
                name: props.productName,
                users_id: props.id,
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
        return creationPromise
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}


module.exports = {searchBarAllCreations, searchBarUserCreations};