const { Users } = require('../dataBase/models');
const { Creations } = require('../dataBase/models');
const { Creation_component } = require('../dataBase/models');
const { Assessments } = require('../dataBase/models');

const deleteUser = async (id) => {
    try {
        const userId = await Users.findByPk(id, {
            attributes: ['id']
        })
        
        await Assessments.destroy({
            where: {
                user_id: id
            }
        })
        const allCreationsByUser = await Creations.findAll({
            where: {
                users_id: userId.id
            },
            attributes: ['id']
        })

        let allCreationId = [];
        allCreationsByUser.map(obj => allCreationId.push(obj.id));

        await Promise.all(allCreationId.map(async el => {
            await Assessments.destroy({
                where: {
                    creation_id: el
                }
            })
            await Creation_component.destroy({
                where: {
                    creation_id: el
                }
            })
        }))


        await userId.destroy();

        // const aux = { ...user.dataValues };
        return true;
        // await user.destroy(); 
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = deleteUser;