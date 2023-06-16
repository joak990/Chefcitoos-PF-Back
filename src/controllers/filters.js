const { Op } = require("sequelize");

const { products } = require("../dataBase/models");
const { Creations } = require("../dataBase/models");


const filtersProducts = async ({ categoria, precioMin, precioMax, precioUnico, precioOrden, disponible, personalizable }) => {
    let productos;
    try {
        const filter = {};

        if (categoria) {
            filter.type_product = categoria;
        }

        if (precioMin || precioMax || precioUnico || precioOrden) {
            filter.price = {};
        }

        if (disponible) {
            filter.isDeleted = disponible;
        }

        if (personalizable) {
            filter.customizable = personalizable;
        }

        if (precioMin && precioMax) {
            filter.price[Op.between] = [precioMin, precioMax];
        } else {
            if (precioMin) {
                filter.price[Op.gte] = precioMin;
            }

            if (precioMax) {
                filter.price[Op.lte] = precioMax;
            }

            if (precioUnico) {
                filter.price[Op.eq] = precioUnico;
            }
        }
        productos = await products.findAll({
            where: filter,
            order: [['price', precioOrden || 'ASC']]
        });
     
        return productos;

    } catch (error) {
        console.log(error);
    }
};



const filtersCreations = async ({ categoria, precioMin, precioMax, precioUnico, precioOrden, ingredientes, ratingOrden }) => {

    let productos;
    try {
        const filter = {
            isDeleted: false,
            isPosted: true,
        };

        if (categoria) {
            filter.type_product = categoria;
        }

        if (precioMin || precioMax || precioUnico || precioOrden) {
            filter.price = {};
        }

        if (personalizable) {
            filter.customizable = personalizable;
        }

        if (personalizable) {
            filter.customizable = personalizable;
        }

        if (precioMin && precioMax) {
            filter.price[Op.between] = [precioMin, precioMax];
        } else {
            if (precioMin) {
                filter.price[Op.gte] = precioMin;
            }

            if (precioMax) {
                filter.price[Op.lte] = precioMax;
            }

            if (precioUnico) {
                filter.price[Op.eq] = precioUnico;
            }
        }
        productos = await products.findAll({
            where: filter,
            order: [['price', precioOrden || 'ASC']]
        });
     
        return productos;

    } catch (error) {
        console.log(error);
    }
};


module.exports = { filtersProducts, filtersCreations }