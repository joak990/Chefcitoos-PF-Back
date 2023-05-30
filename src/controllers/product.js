const { type_products } = require('../dataBase/models')

const addType_product = async (req, res) => {

    try {
        const { name } = req.body;

        const result = await type_products.create({
            name : name
        })
        
        res.json(result).status(201)

    } catch (error) {
        console.log(error)
    }
}

const getAllType_product = async (req, res) => {
    try {
        const result = await type_products.findAll()

        res.json(result).status(200)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { addType_product, getAllType_product }