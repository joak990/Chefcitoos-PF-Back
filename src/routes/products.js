const server = require('express');
const router = server.Router();

const createProduct = require('../controllers/createProduct');
const deleteProduct = require('../controllers/deleteProduct');
const getAllProducts = require('../controllers/getProducts');
const changeIsDeletedValueProduct = require('../controllers/changeIsDeletedValueProduct');
const changePurchasedAmount = require('../controllers/changePurchasedAmount');
const getDataDashboard = require('../controllers/getDataDashboard');

router.post('/', async (req, res) => {
    try {
        const { name, description, price, image, customizable, type_product, isDeleted } = req.body;
        const newProduct = await createProduct({ name, description, price, image, customizable, type_product, isDeleted })
        res.status(200).send(newProduct);
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await deleteProduct(id)
        res.status(200).send(deletedProduct);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const getProducts = await getAllProducts()
        res.status(200).send(getProducts);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.put('/change/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const changeValue = await changeIsDeletedValueProduct(id);
        res.status(200).send(changeValue);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.put('/purchasedamount', async (req, res) => {
    try {
        const ans = await changePurchasedAmount();
        res.status(200).send(ans);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

router.get('/dashboard/total', async (req, res) => {
    try {
        const ans = await getDataDashboard();
        res.status(200).send(ans);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

module.exports = router;