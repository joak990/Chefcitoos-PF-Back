const router = require('express').Router()

const { addType_product, getAllType_product } = require('../controllers/type_product')

// localhost:3001/type_products

router.post('/', addType_product)

router.get('/', getAllType_product)

module.exports = router;