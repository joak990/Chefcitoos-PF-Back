const { Users } = require('../dataBase/models');

const getAllusers = async () => {
    try {
        const allUers = await Users.findAll({
            order: [['name', 'ASC']]
        });
        const aux = allUers.map(el => el.dataValues);
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getAllusers;