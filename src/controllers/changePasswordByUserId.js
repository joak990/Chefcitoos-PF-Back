const { Users } = require('../dataBase/models');

const changePasswordByUserId = async (id, password) => {
    try {
        const user = await Users.findByPk(id);
        user.password = password;

        await user.save();
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = changePasswordByUserId