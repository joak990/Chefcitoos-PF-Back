const { products } = require('../dataBase/models');
const { Creations } = require('../dataBase/models');
const { Creations_order } = require('../dataBase/models');
const { Order_product } = require('../dataBase/models');

const changePurchasedAmount = async () => {
    try {

        const allCreationsOrder = await Creations_order.findAll({
            include: {
                model: Creations,
                attributes: ['product_id']
            }
        });
        for (const element of allCreationsOrder) {
            if (element.quantity) {
              const product = await products.findByPk(element.Creation.product_id);
              product.purchased_amount += element.quantity;
              await product.save();
            }
          }

        const allOrderProduct = await Order_product.findAll();
        for (const element of allOrderProduct) {
            if(element.quantity){
                const product = await products.findByPk(element.product_id);
                product.purchased_amount += element.quantity
                await product.save();
            }
        }
        
        return "Proccess finished";
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = changePurchasedAmount;