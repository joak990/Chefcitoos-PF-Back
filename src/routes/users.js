const server = require('express');
const router = server.Router();

const createUser = require('../controllers/createUser');
const deleteUser = require('../controllers/deleteUser');
const changeIsDeletedValue = require('../controllers/changeIsDeletedValueUser');
const validateUser = require('../controllers/validateUser');

router.post('/', async (req, res) => {
    try {
        const { id, name, email, password, type, isDeleted, uid } = req.body;
        const newUser = await createUser({ id, name, email, password, type, isDeleted, uid })
        res.status(200).send(newUser);
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
        const { email, password } = req.body;
        const validCredentials = await validateUser(email, password);

        if (validCredentials) {
            res.status(200).json({ success: true });
        } else {
            res.status(200).json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }

})
module.exports = router;