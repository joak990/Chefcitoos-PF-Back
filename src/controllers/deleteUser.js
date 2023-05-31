const { Users } = require('../dataBase/models');

const deleteUser = async (id) => {
    try {
        const user = await Users.findByPk(id);
        const aux = { ...user.dataValues };
        await user.destroy();
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = deleteUser;