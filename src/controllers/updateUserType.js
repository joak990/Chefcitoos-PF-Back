const { Users } = require('../dataBase/models');

const updateUserType = async (id, userType) => {
    try {
        const user = await Users.findByPk(id);
        if(!user) {
            return 'Usuario no encontrado'
        }
        console.log(userType)
        user.type = userType;
        await user.save();
        return `Tipo de usuario actualizado a: ${userType} correctamente`
    } catch (error) {
        throw new Error (error);
    }
}

module.exports = updateUserType;