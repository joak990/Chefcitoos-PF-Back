const { Users } = require('../dataBase/models');

const validateUser = async (email, password) => {
    // console.log(user)
    try {
        const userEmail = await Users.findOne({
            where: { email:email }
        })
        if(userEmail){
            if(userEmail.dataValues.password === password){
                return {
                    id: userEmail.dataValues.id, 
                    email: userEmail.dataValues.email, 
                    name: userEmail.dataValues.name
                };
            }
            return false;
        }
        return false;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = validateUser;