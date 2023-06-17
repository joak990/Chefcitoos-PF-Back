const { Op, where } = require("sequelize");

const { products } = require("../dataBase/models");
const { Creations } = require("../dataBase/models");
const { Creation_component } = require("../dataBase/models");
const { Users } = require('../dataBase/models');



const filtersProducts = async ({ categoria, precioMin, precioMax, precioUnico, precioOrden, disponible, personalizable }) => {
    try {
        let filter = {};

        if (categoria) {
            filter.type_product = categoria;
        }

        if (precioMin || precioMax || precioUnico || precioOrden) {
            filter["$products.price$"] = {};

            if (precioMin && precioMax) {
                filter["$products.price$"][Op.between] = [precioMin, precioMax];
            } else {
                if (precioMin) {
                    filter["$products.price$"][Op.gte] = precioMin;
                }

                if (precioMax) {
                    filter["$products.price$"][Op.lte] = precioMax;
                }

                if (precioUnico) {
                    filter["$products.price$"][Op.eq] = precioUnico;
                }
            }
        }

        if (disponible) {
            filter.isDeleted = disponible;
        }

        if (personalizable) {
            filter.customizable = personalizable;
        }

        const productos = await Creations.findAll({
            include: [
                {
                    model: products,
                    as: "products",
                    where: filter,
                },
            ],
            order: [["products", "price", precioOrden || "ASC"]],
        });

        return productos;
    } catch (error) {
        console.log(error);
    }
};

const filtersCreations = async ({ id, categoria, precioMin, precioMax, precioUnico, precioOrden, ingredientes, ratingOrden }) => {
    try {

        let creationWhere = {
            isDeleted: false,
            isPosted: true,
        }

        let filter = {};

        let order 

        if (precioOrden || ratingOrden) {
            if (precioOrden && ratingOrden){
                throw new Error ("Solo puedes ordenar la informacion por un tipo de ordenamiento")
            } else if (precioOrden){
                order = ["products", "price", precioOrden || "ASC"]
            } else if (ratingOrden) {
                order = ["average", ratingOrden || "ASC"]
            }
        }

        if (id) {
            creationWhere.users_id = id;
        }

        if (categoria) {
            filter.type_product =
            {
                [Op.in]: [...categoria],
            };
        }

        if (precioMin || precioMax || precioUnico) {
            let filterPrecio = {};

            if (precioMin && precioMax) {
                filterPrecio[Op.between] = [precioMin, precioMax];
            } else {
                if (precioMin) {
                    filterPrecio[Op.gte] = precioMin;
                }

                if (precioMax) {
                    filterPrecio[Op.lte] = precioMax;
                }

                if (precioUnico) {
                    filterPrecio[Op.eq] = precioUnico;
                }
            }

            filter["$products.price$"] = filterPrecio;
        }

        if (!ingredientes && !categoria && id){

            const creaciones = await Creations.findAll({
                include: [{
                        model: products,
                        as: "products",
                    }
                ],
                where: creationWhere,
                order: [order || ["products", "price", precioOrden || "ASC"]],
            });
            return creaciones;

        } else if (ingredientes && categoria && id) {

            const creaciones = await Creations.findAll({
                include: [{
                        model: products,
                        as: "products",
                        where: filter,
                    }, {
                        model: Creation_component,
                        attributes: ["component_id"],
                        where: {
                            component_id: {
                                [Op.in]: [...ingredientes],
                            }
                        },
                    }

                ],
                where: creationWhere,
                order: [order || ["products", "price", precioOrden || "ASC"]],
            });
            return creaciones;

        } else if (ingredientes && categoria ) {

            const creaciones = await Creations.findAll({
                include: [
                    {
                        model: products,
                        as: "products",
                        where: filter,
                    },
                    {
                        model: Creation_component,
                        attributes: ["component_id"],
                        where: {
                            component_id: {
                                [Op.in]: [...ingredientes],
                            }
                        },
                    },

                ],
                where: creationWhere,
                order: [order || ["products", "price", precioOrden || "ASC"]],
            });
            return creaciones;
        } else if (ingredientes && !categoria) {
            const creaciones = await Creations.findAll({
                include: [
                    {
                        model: Creation_component,
                        attributes: ["component_id"],
                        where: {
                            component_id: {
                                [Op.in]: [...ingredientes],
                            }
                        },
                    },

                ],
                where: creationWhere,
                order: [order || ["products", "price", precioOrden || "ASC"]],
            });

            return creaciones;
        } else if (!ingredientes && categoria) {
            const creaciones = await Creations.findAll({
                include: [
                    {
                        model: products,
                        as: "products",
                        where: filter,
                    },
                ],
                where: creationWhere,
                order: [order || ["products", "price", precioOrden || "ASC"]],
            });

            return creaciones;
        }

        const creaciones = await Creations.findAll({
            include: [
                {
                    model: products,
                    as: "products",
                    where: filter,
                },
            ],
            where: creationWhere,
            order: [order || ["products", "price", precioOrden || "ASC"]],
        });

        return creaciones;

    } catch (error) {
        console.log(error);
    }
};

module.exports = { filtersProducts, filtersCreations };
