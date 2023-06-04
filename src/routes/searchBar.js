const server = require('express');
const router = server.Router();

const {searchBarAllCreations, searchBarUserCreations} = require ('../controllers/searchBar')

router.get('/', async (req, res) => {
    try {
        const { productName } = req.query;
        const getCreation = await searchBarAllCreations(productName)
        res.status(200).send(getCreation);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { productName } = req.query;
        const { id } = req.params;
        const getCreation = await searchBarUserCreations({id, productName})
        res.status(200).send(getCreation);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router;