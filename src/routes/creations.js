const server = require('express');
const router = server.Router();

const createCreation = require('../controllers/createCreation');
const deleteCreation = require('../controllers/deleteCreation');
const getCreations = require('../controllers/getCreations');

router.post('/', async (req, res) => {
    try {
        const { product_id, users_id, name, price, image, isVisible, purchased_amount } = req.body;
        const newCreation = await createCreation({ product_id, users_id, name, price, image, isVisible, purchased_amount })
        res.status(200).send(newCreation);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCreation = await deleteCreation(id)
        res.status(200).send(deletedCreation);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const getCreation = await getCreations()
        res.status(200).send(getCreation);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router;