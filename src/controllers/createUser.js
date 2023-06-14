const { Users } = require('../dataBase/models');

const createUser = async (user) => {

    // const userDb = await Users.findByPk(user.id)
    try {
        let root = '';
        user.uid ? root = 'google' : root = 'register';

        const userDb = await Users.findOne({
            where: { email: user.email }
        })
        if (userDb && userDb.isDeleted) {
            return userDb.isDeleted
        }
        // console.log(userDb)
        if (userDb) return {
            id: userDb.id,
            email: userDb.email,
            name: userDb.name,
            root: root,
            isDeleted : userDb.isDeleted,
            address: userDb.address,
            duplicated: true
        };

        // if (user.uid) {
        //     const userUid = await Users.findOne({
        //         where: { uid: user.uid }
        //     })
        //     if (userUid) return userUid;
        // }

        const newUser = await Users.create({
            name: user.name,
            email: user.email,
            password: user.password,
            type: user.type,
            isDeleted: user.isDeleted,
            uid: user.uid,
            address: user.address
        })
        newUser.dataValues.root = root;
        newUser.dataValues.duplicated = false;
        return newUser.dataValues;
    } catch (error) {
        // console.log(error);
        throw new Error(error);
    }
}

module.exports = createUser;