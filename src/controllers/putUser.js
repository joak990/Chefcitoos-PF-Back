const { Users } = require('../dataBase/models');
const { Creations } = require('../dataBase/models');
// const { Creation_component } = require('../dataBase/models');
const { Assessments } = require('../dataBase/models');

const putUser = async (id) => {
    try {
        const userId = await Users.findByPk(id, {
            attributes: ['id']
        })

        const comments = await Assessments.findAll({
            where : {
                user_id : id
            }, 
            attributes : ['id']
        })

        const creations = await Creations.findAll({
            where : {
                users_id : id
            },
            attributes : ['id']
        })

        const arrComments = comments.map((el) => el.dataValues.id)
        const arrCreations = creations.map((el) => el.dataValues.id)

        if(!userId.isDeleted) {
            userId.isDeleted = true
            await userId.save()
        } else if(userId.isDeleted === true) {
            userId.isDeleted = false
            await userId.save()
        }

        await Promise.all(arrCreations.map(async (el) => {
            const creation = await Creations.findByPk(el);
            if(!creation.isDeleted){
                creation.isDeleted = true;
                await creation.save();
            }else {
                creation.isDeleted = false;
                await creation.save();
            }
        }))

        await Promise.all(arrComments.map( async (el) => {
            const assessment = await Assessments.findByPk(el);
            if(!assessment.isDeleted){
                assessment.isDeleted = true;
                await assessment.save();
            }else {
                assessment.isDeleted = false;
                await assessment.save()
            }
        }))
        return userId ;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = putUser;








// userId.isD

// await Assessments.destroy({
//     where: {
//         user_id: id
//     }
// })
// const allCreationsByUser = await Creations.findAll({
//     where: {
//         users_id: userId.id
//     },
//     attributes: ['id']
// })

// let allCreationId = [];
// allCreationsByUser.map(obj => allCreationId.push(obj.id));

// await Promise.all(allCreationId.map(async el => {
//     await Assessments.destroy({
//         where: {
//             creation_id: el
//         }
//     })
//     await Creation_component.destroy({
//         where: {
//             creation_id: el
//         }
//     })

// }))

// await userId.destroy();