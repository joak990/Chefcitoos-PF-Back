const { Assessments } = require('../dataBase/models');

const deleteComments = async (data) => {
    try {
        // console.log(id);
        const comments = await Assessments.destroy({
            where : {
                id : data.id
            }
        })
        return true ;
    } catch (error) {
        console.log('error2',error);
        throw new Error(error);
    }
}

module.exports = deleteComments;