const { Assessments } = require('../dataBase/models');

const verifyAssessment = async (data) => {
    try {
        const verify = await Assessments.findOne({
            where: {
                user_id: data.user_id,
                creation_id: data.creation_id
            }
        })
        const response = verify ? true : false
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = verifyAssessment;