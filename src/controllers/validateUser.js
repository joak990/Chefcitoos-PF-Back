const { Users } = require('../dataBase/models');

const validateUser = async (email, password, type) => {
    // console.log(user)
    try {        
        const userEmail = await Users.findOne({
            where: { email:email }
        })
        console.log('::::::', userEmail.dataValues.isDeleted);
        if (userEmail && userEmail.dataValues.isDeleted) {
            return userEmail.dataValues.isDeleted
        }
        if(userEmail){
            if(userEmail.dataValues.password === password){
                if(type === 'admin'){
                    return {
                        validate: true,
                        id: userEmail.dataValues.id
                    }
                } else/*  if (type === 'user') */{
                    return {
                        id: userEmail.dataValues.id, 
                        email: userEmail.dataValues.email, 
                        name: userEmail.dataValues.name
                    };                    
                }
            }
            return false;
        }
        return false;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = validateUser;