const { Assessments } = require('../dataBase/models');

const createAssessments = async (Assmnts) => {
    try {
        const newAssessments = await Assessments.create({
            creation_id: Assmnts.creation_id,
            user_id: Assmnts.user_id,
            content: Assmnts.content,
            vote: Assmnts.vote
        })
        return newAssessments.dataValues;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

module.exports = createAssessments;