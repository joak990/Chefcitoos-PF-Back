const server = require('express');
const router = server.Router();

const createUser = require ('../controllers/createUser')

router.post('/', async (req, res) => {
    try {
        const { name, email, password, type, isDeleted } = req.body;
        const newUser = await createUser({ name, email, password, type, isDeleted })
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

module.exports = router;