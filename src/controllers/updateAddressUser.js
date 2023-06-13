const { Users } = require('../dataBase/models');

const updateAddressUser = async (id, newAddress) => {
    try {
        const user = await Users.findByPk(id);
        if(!user) {
            return 'Usuario no encontrado'
        }
        console.log(newAddress)
        user.address = newAddress;
        await user.save();
        return `Dirección actualizada a: ${newAddress} correctamente`
    } catch (error) {
        throw new Error (error);
    }
}

module.exports = updateAddressUser;