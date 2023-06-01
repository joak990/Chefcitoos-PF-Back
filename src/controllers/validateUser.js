const { Users } = require('../dataBase/models');

const validateUser = async (email, password) => {
    // console.log(user)
    try {
        const userEmail = await Users.findOne({
            where: { email:email }
        })
        if(userEmail){
            if(userEmail.dataValues.password === password){
                // console.log('trueeeeeeeeeeeee')
                return true;
            }
            // console.log('contraseña incorrectaaaaaaaa')
            return false;
        }
        // console.log('no se encontroooooooooo')
        return false;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = validateUser;