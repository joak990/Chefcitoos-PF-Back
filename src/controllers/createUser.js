const { Users } = require('../dataBase/models');

const createUser = async (user) => {
    try {
        const newUser = await Users.create({
            name: user.name,
            email: user.email,
            password: user.password,
            type: user.type,
            isDeleted: user.isDeleted
        })
        return newUser.dataValues;
    } catch (error) {
        // console.log(error);
        throw new Error (error);
    }
}

module.exports = createUser;