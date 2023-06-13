const server = require('express');
const router = server.Router();
const  OrdersDashboard = require('../controllers/getadminOrders')

router.get('/orders', async (req, res) => {
    try {
        const Orders = await OrdersDashboard()
        res.status(200).json(Orders);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router;