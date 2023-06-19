const server = require('express');
const router = server.Router();

const createCreation = require('../controllers/createCreation');
const deleteCreation = require('../controllers/deleteCreation');
const getCreations = require('../controllers/getCreations');
const getCreationsById = require('../controllers/getCreationByUserId')
const getCreationsTopRated = require('../controllers/getCreationsTopRated')

router.post('/', async (req, res) => {
    try {
        const { product_id, users_id, name, price, image, isPosted, purchased_amount, isDeleted, components } = req.body;
        const newCreation = await createCreation({ product_id, users_id, name, price, image, isPosted, purchased_amount, isDeleted, components })
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

router.get('/posts', async (req, res) => {
    try {
        const { filterName } = req.query;
        const getCreation = await getCreations(filterName)
        res.status(200).send(getCreation);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/myCreations/:id', async (req, res) => {
    try {
        const { type, filterName } = req.query;
        const { id } = req.params;
        const creationById = await getCreationsById(id, type, filterName)
        res.status(200).send(creationById);
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message })
    }
})

router.get('/topRated', async (req, res) => {
    try {
        const creationsTop = await getCreationsTopRated();
        res.status(200).send(creationsTop);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

module.exports = router;