const server = require('express');
const router = server.Router();

const createUser = require('../controllers/createUser');
const deleteUser = require('../controllers/deleteUser');
const changeIsDeletedValue = require('../controllers/changeIsDeletedValueUser');
const validateUser = require('../controllers/validateUser');
const getAllUsers = require('../controllers/getUsers');
const editAddressUser = require('../controllers/updateAddressUser')
const getuserById = require('../controllers/getuserById')
const updateTypeUser = require('../controllers/updateUserType')

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

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUser(id)
        res.status(200).send(deletedUser);
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

module.exports = router;