const server = require('express');
const router = server.Router();

const {createOrder, orderCreations, orderProducts, getOrderById, updateState } = require('../controllers/orders');

router.post('/', async (req, res) => {
    try {
        const { users_id, total_price, state, date, creations, products} = req.body;
        const newOrder = await createOrder({ users_id, total_price, state, date, creations, products})
        res.status(200).send(newOrder);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.post('/orderCreations', async (req, res) => {
    try {
        const { creation_id, order_id, amount } = req.body;
        const newOrder = await orderCreations({ creation_id, order_id, amount })
        res.status(200).send(newOrder);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.post('/orderProducts', async (req, res) => {
    try {
        const { product_id, order_id, amount } = req.body;
        const newOrder = await orderProducts({ product_id, order_id, amount })
        res.status(200).send(newOrder);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const getOrder = await getOrderById(id)
        res.status(200).send(getOrder);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { state, confirmation_code } = req.body;
        const creationById = await updateState(id, state, confirmation_code)
        res.status(200).send(creationById);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router;