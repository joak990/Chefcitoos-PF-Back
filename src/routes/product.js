const router = require('express').Router()

const { addType_product, getAllType_product } = require('../controllers/product')

// localhost:3001/products

router.post('/', addType_product)

router.get('/', getAllType_product)

module.exports = router;