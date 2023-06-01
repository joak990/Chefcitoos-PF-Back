const { Creations } = require('../dataBase/models');

const getCreations = async () => {
    try {
        const allCreations = await Creations.findAll();
        const aux = allCreations.map(el=>el.dataValues)
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getCreations;