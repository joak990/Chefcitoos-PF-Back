const { Op } = require('sequelize');
const { Orders } = require('../dataBase/models');

const getSales = async () => {
    try {
        const currentDate = new Date();
        const previousDate = new Date(currentDate);
        const prePreviousDate = new Date(currentDate);
        previousDate.setDate(previousDate.getDate() - 1);
        prePreviousDate.setDate(previousDate.getDate() - 2);

        const currentSalesArr = await Orders.findAll({
            where: {
                date: {
                    [Op.gte]: previousDate,
                    [Op.lt]: currentDate
                }
            }
        })
        let currentSales = 0;
        currentSalesArr.forEach(sale => {
            currentSales += sale.total_price
        })

        const previousSalesArr = await Orders.findAll({
            where: {
                date: {
                    [Op.gte]: prePreviousDate,
                    [Op.lt]: previousDate
                }
            }
        })
        let previousSales = 0;
        previousSalesArr.forEach(sale => {
            previousSales += sale.total_price
        })

        const percentaje = ((currentSales - previousSales)/previousSales) * 100;
        
        return {
            ventas: currentSales,
            porcentaje: percentaje.toFixed(2)
        };
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getSales;