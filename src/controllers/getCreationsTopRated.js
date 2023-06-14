const { Op } = require('sequelize');
const { Creations } = require('../dataBase/models');

const getCreationsTopRated = async () => {
        try {
            
            const topRatedCreations = await Creations.findAll({
                where: {
                    average: {
                        [Op.not]: null
                    }
                },
                order: [['average', 'DESC']],
                limit: 3
            })

            return topRatedCreations

        } catch (error) {
            throw new Error(error);
        }
    }

module.exports = getCreationsTopRated;