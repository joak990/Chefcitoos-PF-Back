const { Assessments, Sequelize } = require('../dataBase/models');
const { Users } = require('../dataBase/models');


const getComments = async (data) => {
    console.log(data)
    try {
        const comments = await Assessments.findAll({
            where: {
                creation_id: data.id,
            },
            attributes: ['content', 'createdAt', 'img', 'vote', [Sequelize.literal('"User"."name"'), 'userName']],
            include: {                
                    model: Users,
                    attributes: []                
            }
        });
        
        return comments;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getComments;