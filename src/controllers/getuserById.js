const { Users } = require('../dataBase/models');

const getuserById = async (id) => {
    try {
        const user = await Users.findByPk(id);
        return user.dataValues;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getuserById;