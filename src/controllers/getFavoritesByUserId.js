const { Creations } = require('../dataBase/models');

const getFavoritesByUserId = async (id) => {
        try {            
            const favorites = await Creations.findAll({
                where: {
                    users_id: id
                },
                order: [['purchased_amount', 'DESC']],
                limit: 3
            })            
            return favorites
        } catch (error) {
            throw new Error(error);
        }
    }

module.exports = getFavoritesByUserId;