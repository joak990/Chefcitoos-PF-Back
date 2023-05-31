const router = require('express').Router()
const { addComponent_type, removeComponent_type, getAllComponent_type, getOneComponent_type } = require('../controllers/components_type')

router.post('/', addComponent_type)

router.delete('/:id', removeComponent_type)

router.get('/', getAllComponent_type)

router.get('/:id', getOneComponent_type)

module.exports = router;