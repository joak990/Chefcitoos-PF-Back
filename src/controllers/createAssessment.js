const { Assessment } = require('../dataBase/models');

const createAssessment = async (assessment) => {
    try {
        const newAssessment = await Assessment.create({
            creation_id: assessment.creation_id,
            user_id: assessment.user_id,
            content: assessment.content,
            vote: assessment.vote
        })
        return newAssessment.dataValues;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

module.exports = createAssessment;