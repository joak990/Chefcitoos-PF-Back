const server = require('express');
const router = server.Router();

const createUser = require('../controllers/createUser');
const putUser = require('../controllers/putUser');
const changeIsDeletedValue = require('../controllers/changeIsDeletedValueUser');
const validateUser = require('../controllers/validateUser');
const getAllUsers = require('../controllers/getUsers');
const editAddressUser = require('../controllers/updateAddressUser')
const getuserById = require('../controllers/getuserById')
const updateTypeUser = require('../controllers/updateUserType')
const changeDataByUserId = require('../controllers/changeDataByUserId');
const changePasswordByUserId = require('../controllers/changePasswordByUserId');
const getFavoritesByUserId = require('../controllers/getFavoritesByUserId');

router.put('/newAddress/:id', async (req, res) => {
    try {
        const { newAddress } = req.body;
        const { id } = req.params;

        const changeValue = await editAddressUser(id, newAddress);
        res.status(200).send(changeValue);
    } catch (error) {

        res.status(400).send({ error: error.message });
    }
})

router.put('/userType/:id', async (req, res) => {
    try {
        const { userType } = req.body;
        const { id } = req.params;
        const changeValue = await updateTypeUser(id, userType);
        res.status(200).send(changeValue);
    } catch (error) {

        res.status(400).send({ error: error.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const { id, name, email, password, type, isDeleted, uid } = req.body;
        const dataUser = await createUser({ id, name, email, password, type, isDeleted, uid })
        res.status(200).send(dataUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const ModifiedUser = await putUser(id)
        res.status(200).send(ModifiedUser);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { isDeleted } = req.body;
        const changeValue = await changeIsDeletedValue(id, isDeleted);
        res.status(200).send(changeValue);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.post('/validate', async (req, res) => {
    try {
        const { email, password, type } = req.body;
        const dataUser = await validateUser(email, password, type);

        if (dataUser) {
            res.status(200).json(dataUser);
        } else {
            res.status(200).json(dataUser); //false
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }

})


router.get('/', async (req, res) => {
    try {
        const allUsers = await getAllUsers()
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userById = await getuserById(id);
        res.status(200).send(userById);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.put('/changeData/:id', async (req, res) => {
    try {
        const { name, tel, address } = req.body;
        const { id } = req.params;
        const newData = await changeDataByUserId({ name, tel, address, id });
        res.status(200).send(newData);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.put('/changePassword/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        const ans = await changePasswordByUserId(id, password);
        res.status(200).send(ans);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/favorites/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const favorites = await getFavoritesByUserId(id);
        res.status(200).send(favorites);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router;