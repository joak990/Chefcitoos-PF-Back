const { Users } = require('../dataBase/models');

const changeIsDeletedValue = async (id, value) => {
    try {
        const user = await Users.findByPk(id);
        if(!user) {
            return 'Usuario no encontrado'
        }
        user.isDeleted = value;
        await user.save();
        return `Valor isDeleted actualizado a: ${value} correctamente`
    } catch (error) {
        throw new Error (error);
    }
}

module.exports = changeIsDeletedValue;