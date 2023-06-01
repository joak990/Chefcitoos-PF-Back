const { Creations } = require('../dataBase/models');

const deleteCreation = async (id) => {
    try {
        const creation = await Creations.findByPk(id);
        const aux = { ...creation.dataValues };
        await creation.destroy();
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = deleteCreation;