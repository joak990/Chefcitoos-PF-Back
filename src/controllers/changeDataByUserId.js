const { Users } = require('../dataBase/models');

const changeDataByUserId = async (newData) => {
    try {
        const user = await Users.findByPk(newData.id);
        user.name = newData.name;
        user.address = newData.address;
        user.tel = newData.tel

        await user.save();
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = changeDataByUserId