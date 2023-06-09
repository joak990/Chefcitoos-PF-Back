const { Assessments } = require('../dataBase/models');

const getAllComments = async (data) => {
    try {
        const allComments = await Assessments.findAll({
            where : {
                creation_id:data.id
            }
        });
        const aux = allComments.map(el => el.dataValues);
        return aux;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getAllComments;