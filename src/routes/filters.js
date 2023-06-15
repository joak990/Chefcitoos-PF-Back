const express = require('express');
const { filtersProducts, filtersCreations } = require('../controllers/filters');
const router = express.Router();

router.post('/products', async (req, res) => {
    try {

        const { categoria, precioMin, precioMax, precioUnico, precioOrden, disponible, personalizable } = req.body;

        const filter = await filtersProducts({ categoria, precioMin, precioMax, precioUnico, precioOrden, disponible, personalizable });
        res.status(200).send(filter);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.post('/creations', async (req, res) => {
    try {

        const { categoria, precioMin, precioMax, precioUnico, precioOrden, ingredientes, ratingOrden } = req.body;

        const filter = await filtersCreations({ categoria, precioMin, precioMax, precioUnico, precioOrden, ingredientes, ratingOrden });
        res.status(200).send(filter);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
