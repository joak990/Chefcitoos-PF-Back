const server = require('express');
const router = server.Router();

const {getComponentsCategProductsById} = require('../controllers/componentsCategProductsCrud');

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const getInfoById = await getComponentsCategProductsById(id)
        res.status(200).send(getInfoById);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router;