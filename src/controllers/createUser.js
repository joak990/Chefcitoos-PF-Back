const { Users } = require('../dataBase/models');

const createUser = async (user) => {

    // const userDb = await Users.findByPk(user.id)
    let root = '';
    user.uid ? root = 'google' : root = 'register';

    const userDb = await Users.findOne({
        where: { email: user.email }
    })
    // console.log(userDb)
    if (userDb) return {id: userDb.id, email: userDb.email, name: userDb.name, root: root};

    // if (user.uid) {
    //     const userUid = await Users.findOne({
    //         where: { uid: user.uid }
    //     })
    //     if (userUid) return userUid;
    // }

    try {
        const newUser = await Users.create({
            name: user.name,
            email: user.email,
            password: user.password,
            type: user.type,
            isDeleted: user.isDeleted,
            uid: user.uid
        })
        newUser.dataValues.root = root;
        return newUser.dataValues;
    } catch (error) {
        // console.log(error);
        throw new Error(error);
    }
}

module.exports = createUser;