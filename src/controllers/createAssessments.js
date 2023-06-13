const { Assessments } = require('../dataBase/models');
const { Creations } = require('../dataBase/models');

const createAssessments = async (Assmnts) => {
    try {
        const newAssessments = await Assessments.create({
            creation_id: Assmnts.creation_id,
            user_id: Assmnts.user_id,
            content: Assmnts.content,
            vote: Assmnts.vote,
            img: Assmnts.img
        })
        const votesByCreation = await Assessments.findAll({
            where: {
                creation_id: Assmnts.creation_id
            },
            attributes: ['vote']
        })

        const allVotes = votesByCreation.map(el => el.dataValues.vote)
        const sum = allVotes.reduce((a, b) => a + b, 0);
        const average = sum / allVotes.length;
        const roundedAverage = average.toFixed(1);
        const creation = await Creations.findByPk(Assmnts.creation_id);
        creation.average = roundedAverage;
        await creation.save();

        console.log("average: ", roundedAverage);
        return newAssessments.dataValues;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

module.exports = createAssessments;