const server = require('express');
const router = server.Router();

const { createOrder, orderCreations, orderProducts, getOrderById, updateState } = require('../controllers/orders');
const getAllOrdersById = require('../controllers/getAllOrdersById');
const OrdersDashboard = require('../controllers/getadminOrders')
const getSales = require('../controllers/getSales');

router.post('/', async (req, res) => {
    try {
        const { users_id, total_price, state, date, creations, products } = req.body;
        const newOrder = await createOrder({ users_id, total_price, state, date, creations, products })
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

router.get('/sales/total', async (req, res) => {
    try {
        const ans = await getSales();
        res.status(200).send(ans);
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

router.post('/admin', async (req, res) => {
    try {
        const Orders = true
        res.status(200).json(Orders);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/all/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const allOrders = await getAllOrdersById(id);
        res.status(200).send(allOrders);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})


module.exports = router;