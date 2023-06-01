const { Users } = require('../dataBase/models');

const createUser = async (user) => {
    console.log("id ----> ",user.id)
    const userDb = await Users.findByPk(user.id)
    const userUid = await Users.findOne({
        where: {uid: user.uid}
    })
 
    try {
        if(userDb) return userDb;
        if(userUid) return userUid;
        const newUser = await Users.create({
            name: user.name,
            email: user.email,
            password: user.password,
            type: user.type,
            isDeleted: user.isDeleted,
            uid: user.uid
        })
        return newUser.dataValues;
    } catch (error) {
        // console.log(error);
        throw new Error (error);
    }
}

module.exports = createUser;